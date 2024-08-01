const { url } = require('inspector');

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
      },*/
      backgroundImage: {
        'photographyBackground': "url('../../public/assets/photography/backgroundImage/image.jpg')" 
      }, 
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
