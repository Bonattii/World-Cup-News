/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    colors: {
      primary: '#8a1538',
      primary10: '#b61c4a',
      primary30: '#e5537f',
      primary50: '#f2acc1',
      primary_alpha: 'rgba(138, 21, 56, 0.3)',
      secondary: '#ff004c',
      accent: '#00cfb7',
      background: '#eeeee4'
    },
    extend: {
      width: {
        64: '64rem',
        32: '32rem'
      },
      height: {
        44: '44rem',
        32: '32rem',
        18: '18rem'
      },
      transitionDuration: {
        2000: '2000ms'
      },
      backgroundImage: {
        qatar: "url('/src/assets/qatar.svg')"
      }
    }
  },
  plugins: []
};
