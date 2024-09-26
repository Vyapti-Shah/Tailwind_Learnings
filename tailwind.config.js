/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    
    extend: {
      colors:{
      'colour1': '#bd377a',
      'colour2': '#01ee91'
      }
    },
    fontFamily: {
      'font1': ['Times New Roman'],
      'font2': ['Sreda']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing:{
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    
  },
  plugins: [],
}