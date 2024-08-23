// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          900: ' #1A0663', // Azul marinho
          800: ' #1A0663', // Azul marinho um pouco mais escuro para hover
        },
        darkRed: {
          900: '#EC1C24', // Vermelho

        },
        red: {
          400: '#EC1C24', // Vermelho claro
        },
      },
    },
  },
  plugins: [],
}
