/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'phantasmagorics-blue': '#001749',
        'phantasmagorics-white': '#FFFFFF',
      },
      fontSize: {
        'button': '23px',
        'footer': '19px',
        'common': '22px',
        'title': '27px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

