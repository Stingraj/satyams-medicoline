/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      colors: {
        brand: {
          red: '#C0392B',
          dark: '#922B21',
          light: '#E8514A',
          gray: '#6B7280',
          navy: '#0f172a',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
