/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ou 'media' se preferir ativar automaticamente baseado no tema do sistema
  theme: {
    extend: {
      colors: {
        darkBlue: {
          900: '#0a1f44',
          800: '#0d2755',
          700: '#102d66',
        },
        lightBlue: '#5c9ecd',
      },
    },
  },
  plugins: [],
}
