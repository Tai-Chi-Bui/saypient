/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-64': 'calc(100vh - 64px)',
      },
      boxShadow: {
        'custom-blue': '0px 20px 30px 0px #4AA0E333',
      },
    },
  },
  plugins: [],
}