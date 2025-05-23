/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'pixel-blue': '#5B7EBD',
        'pixel-dark': '#2D3748',
        'pixel-light': '#F7FAFC',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    }
  }
}

