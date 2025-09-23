import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#05060F',
        elevated: 'rgba(14, 19, 41, 0.72)',
        accent: '#7C86FF',
        aurora: '#55EBD3',
        amber: '#F9A84D'
      },
      fontFamily: {
        sans: ['var(--font-sans)']
      },
      borderRadius: {
        xl: '1.25rem'
      },
      boxShadow: {
        glow: '0 0 120px 0 rgba(124, 134, 255, 0.22)',
        card: '0 40px 80px -40px rgba(8, 12, 24, 0.8)'
      },
      backgroundImage: {
        'aurora-sheen': 'radial-gradient(circle at 20% 20%, rgba(124,134,255,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(85,235,211,0.35), transparent 55%)',
        'grid-faint': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
