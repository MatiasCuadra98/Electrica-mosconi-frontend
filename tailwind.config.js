/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        'blue': '#082F49"',
        'green': '#4ADE80',
        'esmerald': '#34D399',
        'orange': '#F59E0B',
        'gray': '#D6D3D1',
        'light-gray': '#E5E5E5',
        'black': '#000000',
        'withe': '#FFFFFF'
      },
      fontFamily: {
        'font-titles': ['Oswald', 'sans-serif'],
        'font-text': ['Inter', 'sans-serif']
      },
      fontSize: {
        'size-name': '32px',
        'size-titles': '16px',
        'size-subtitles': '13x',
        'size-text': '16px'

      },
      extend: {},
    },
    plugins: [],
  }