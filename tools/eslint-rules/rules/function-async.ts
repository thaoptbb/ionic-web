/**
 * This file sets you up with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ESLintUtils } from "@typescript-eslint/utils";
import { FunctionDeclaration } from "@swc/core";

// NOTE: The rule will be available in ESLint configs as "@nx/workspace-rxjs"
export const RULE_NAME = "function-async";
const defaultOption = {
  excludeNames: ['canActivate', 'canActivateChild', 'canDeactivate', 'canLoad', 'intercept', 'resolve', 'validate', 'transform'],
  includeTypes: ['Observable', 'Promise'],
  message: 'Functions that return Observable or Promise must be had `Async` suffix.',
  suffix: 'Async',
  prefix: ''
};
export const rule = ESLintUtils.RuleCreator<{ recommended: boolean }>(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: `The custom ESLint rule for async function return type Observable and Promise.`,
      recommended: true
    },
    schema: [
      {
        type: 'object',
        properties: {
          excludeNames: { type: 'array', items: { type: 'string' } },
          includeTypes: { type: 'array', items: { type: 'string' } },
          message: { type: 'string' },
          suffix: { type: 'string' },
          prefix: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
    messages: {}
  },
  defaultOptions: [
    defaultOption
  ],
  create(context) {
    const [customConfig] = context.options;
    const config = {
      ...defaultOption,
      ...(customConfig ?? {})
    };
    const checkFunction = (node: Object): void => {
      const parent = node['parent'];
      const type = parent.type;
      const kind = parent['kind'];

      if (type !== 'MethodDefinition' || kind !== 'method') {
        return;
      }

      const functionType = parent['value'].returnType?.typeAnnotation?.['typeName']?.['name'];

      if (!config.includeTypes.includes(functionType)) {
        return;
      }

      const functionName = parent['key']['name'];

      if (config.excludeNames.includes(functionName)) {
        return;
      }

      const suffixCondition = config.suffix ? new RegExp(`${config.suffix}$`).test(functionName) : true;
      const prefixCondition = config.prefix ? new RegExp(`^${config.prefix}`).test(functionName) : true;

      if (!suffixCondition || !prefixCondition) {
        context.report({
          node,
          message: config.message,
        } as unknown as Parameters<typeof context.report>[0]);
      }
    };

    return {
      FunctionDeclaration: (node) => checkFunction(node),
      FunctionExpression: (node) => checkFunction(node),
      ArrowFunctionExpression: (node) => checkFunction(node),
    };
  }
});
