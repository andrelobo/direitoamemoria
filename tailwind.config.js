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
          900: '#0a3d62', // Azul marinho
          800: '#093a5d', // Azul marinho um pouco mais escuro para hover
        },
        darkRed: {
          900: '#ff6f61', // Vermelho

        },
        red: {
          400: '#ff6f61', // Vermelho claro
        },
      },
    },
  },
  plugins: [],
}
