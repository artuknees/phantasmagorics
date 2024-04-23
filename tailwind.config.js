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

      '3xl': '2000px',
      // => @media (min-width: 2000px) { ... }

    },
    fontFamily: {
      'sans': ['peridot-pe-variable','sans-serif']
      // 'sans': ['Work Sans', 'sans-serif'],
      // 'sans-light': ['Work Sans Light', 'sans-serif'],
    },
    extend: {
      colors: {
        'phantasmagorics-blue': '#0033a0',
        'phantasmagorics-dark-blue': '#001749',
        'phantasmagorics-white': '#FFFFFF',
      },
      fontSize: {
        'button': '12px',
        'footer': '11px',
        'common': '13px',
        'title': '14px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

