/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          linksColor: '#f96d00', 
          textColor: '#e3e3e3', 
          bgColor: '#222831',
          addColor: '#393e46'
        },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
