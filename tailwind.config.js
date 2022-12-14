/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#64748B',
        dark: '#475569',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
