/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          linksColor: '#f95959', 
        },
      },
    },
  plugins: [],
}
