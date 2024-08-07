/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme' : '#92DEEF'
      },
      /* backgroundColor: {
        'theme' : '#92DEEF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, */
    },
  },
  /* variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      transform: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
    },
  }, */
  plugins: [],
}
