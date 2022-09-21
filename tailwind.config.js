/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      height: {
        '128': '32rem',
      },
      backgroundImage: {
        'starry': "url('../images/ffflurry.svg')",
        'starryOrange': "url('../images/ffflurryrOrange.svg')"
      },
      fontFamily: {
        "raleway": 'Raleway, sans-serif',
      },
      colors: {
        // primary
        bkg: '#0f0e17',
        card: '#fffffe',
        button: '#7f5af0',
      }
    },
  },
  plugins: [],
}
