/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '425px',
      // => @media (min-width: 640px) { ... }

      tablet: '768px',
      // => @media (min-width: 640px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'display-1': '5rem',
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        brown: '#311F09',
        gray: '#D0CCC7',
        green: '#3FA72F',
        orange: '#FF8A00',
        green: '#3FC66E',
        blue: '#0094FF'
      },
    },
  },
  plugins: [],
};
