#region Build

FROM node:22.13.1-alpine AS build

## Set the working directory
WORKDIR /app

## Add the source code to app
COPY ./package.json /app/
COPY ./package-lock.json /app/

## Install all the dependencies
RUN npm install --legacy-peer-deps

## Copy the source code
COPY . /app/

## Build the version file
RUN apk update
RUN apk add git
RUN apk add jq
RUN jq -n '$ARGS.named'   --arg branchName $(git rev-parse --abbrev-ref HEAD)   --arg commitHash $(git rev-parse --verify HEAD) > ./libs/core/assets/version.json


# Generate the build of the application
RUN npm run build

#endregion

#region Publish

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest
ENV OPTIONS__SETTINGS__PATH /usr/share/nginx/html/medicia-assets/settings

# Copy the build output to replace the default nginx contents.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/apps/core/ /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < ${OPTIONS__SETTINGS__PATH}/appsettings.json > ${OPTIONS__SETTINGS__PATH}/appsettings.production.json && exec nginx -g 'daemon off;'"]

#endregion

# Expose port 80
EXPOSE 80
