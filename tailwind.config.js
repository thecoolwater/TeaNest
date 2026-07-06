/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0B2E26',
        night: '#081A14',
        gold: '#D4AF37',
        cream: '#F7E7A1',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 24px 70px rgba(0, 0, 0, 0.35)',
        glow: '0 18px 50px rgba(212, 175, 55, 0.22)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, rgba(212,175,55,.75), transparent)',
        'forest-radial': 'radial-gradient(circle at 20% 20%, rgba(212,175,55,.16), transparent 34%), radial-gradient(circle at 80% 10%, rgba(247,231,161,.08), transparent 28%)',
      },
    },
  },
  plugins: [],
};
