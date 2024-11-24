/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    screens: {
      'SM': {'max': '768px'},
      'sm': '768px',
      'MD': {'max': '1000px'},
      'md': '1000px',
      'lg': '1200px',
      'xl': '1400px',
    },
    extend: {
      borderRadius: {
        'radur-sm': '4px',
        'radur-md': '6px',
        'radur-lg': '16px',
        'radur-xl': '24px',
        'radur-2xl': '32px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.title-table': {
          fontFamily: '"Roboto Regular", sans-serif',
          fontWeight: '400',
          fontSize: '12px',
          color: '#ffffff',
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
