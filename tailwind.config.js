module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#202020',
        'dark-bg': '#161616',
        'full-red': '#FF0000',
        'full-white': '#FFFFFF',
        'purple-bg': '#8183D0',
        'blue-bg': '#4F6F7A',
        'purple-opposite-bg': '#7E7C2F',
        'blue-opposite-bg': '#B09085',
        'btc-shirt-yellow': '#FEBF23',
        'tiffany': '#0ABAB5'
      },
      fontFamily: {
        title: ['Squada One'],
        text: ['Squada One', 'cursive'],
      },
      fontSize: {
        'huge': ['15rem', '12.5rem'],
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      spacing: {
        '1/4Screen': '22vh',
        '1/2Screen': '50vh',
        '2/3Screen': '66.66vh',
        '1/3Screen': '33.33vh',
        '150px':'150px'
      },
      backgroundImage: {
        'header': "url('../src/assets/BG4.png')",
      },
      boxShadow: {
        'bgShadow': 'inset 0 0 25px 50px rgba(0, 0, 0, 1)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '10': 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        '20': 'repeat(20, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
