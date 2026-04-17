/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#5b9fd4',
          'blue-dark': '#4a8ec3',
          'blue-light': '#80bae3',
          navy: '#111827',
          green: '#059669',
          orange: '#f97316',
          teal: '#0891b2',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #16305a 55%, #3574b0 100%)',
        'cta-gradient': 'linear-gradient(135deg, #5b9fd4 0%, #0891b2 100%)',
        'card-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'count-up': 'count-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
