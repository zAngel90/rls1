/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pixel: {
          bg: '#000000',
          panel: '#0a0a0a',
          panelHover: '#1a1500',
          border: '#3a2800',
          primary: '#F5A500',
          primaryStart: '#F5A500',
          primaryEnd: '#FFD000',
          accent: '#FFD000',
          textBlue: '#FFD000',   /* Amarillo dorado RLS */
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #F5A500 0deg, #FFD000 180deg, #FF8C00 360deg)',
      }
    }
  },
  plugins: [],
};
