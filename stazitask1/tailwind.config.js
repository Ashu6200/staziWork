/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        addShadow: '3px 3px 14px 0px rgba(190, 190, 190, 0.30)',
      },
    },
  },
  plugins: [],
};
