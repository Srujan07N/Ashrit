/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF7',
        surface: '#FFFFFF',
        primary: '#1F6F50',
        secondary: '#2E8B57',
        textPrimary: '#1C1C1C',
        textSecondary: '#4A4A4A',
        borderLight: '#D9E5DD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
