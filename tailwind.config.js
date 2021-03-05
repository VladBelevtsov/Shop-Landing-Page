module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlack: '#171717',
        white: "#fff"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'noto': ['Noto Serif', 'serif']
      },
      maxWidth: {
        '25': '25%',
        '40': '40%',
        '50': '50%',
        '75': '75%',
        '500px': '500px',
        '400px': '400px'
      },
      zIndex: {
        '1': '1'
      },
      boxShadow: {
        sm: '0 3px 10px 3px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
