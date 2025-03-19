

module.exports = {
  prefix: '',
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: [
    './apps/**/*.{html,ts,css,scss,sass,less,styl}',
    './libs/**/*.{html,ts,css,scss,sass,less,styl}',
  ],
  theme: {
  },
  variants: {
    extend: {
      borderColor: [
        'responsive',
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'active',
      ],
      textColor: [
        'responsive',
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'active',
      ],
      backgroundColor: [
        'responsive',
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'active',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
