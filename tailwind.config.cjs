/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          linksColor: '#f95959', 
          textColor: '#e3e3e3', 
          bgColor: '#233142',
          addColor: '#455d7a'
        },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
