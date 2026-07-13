/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1B7A4B',
          'green-dark': '#145C38',
          'green-light': '#2A9A61',
          teal: '#1A6E5E',
          blue: '#1E3A8A',
          'blue-mid': '#2D4FC1',
          'blue-light': '#3B5FD4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1B7A4B 0%, #1A6E5E 50%, #1E3A8A 100%)',
        'card-gradient': 'linear-gradient(135deg, #1B7A4B 0%, #1A6E5E 100%)',
      },
    },
  },
  plugins: [],
}
