const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/pages/assets/hero.jpg')",
      }),
      colors: {
        orange: colors.orange,
        primary: '#447EF2',
        'primary-deep': '#1E4BA6',
        'primary-low': '#6196FF',
        'primary-100': '#F6FCFE',
        'primary-200': '#E6F6FD',
        accent: '#FFE195',
        'accent-deep': '#E5B742',
        'accent-low': '#FFFBF1',
        'primary-dark': '#001737'
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
