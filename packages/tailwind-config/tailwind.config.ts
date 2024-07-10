import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade 0.2s ease',
        'fade-out': 'scale-out-content 0.2s ease reverse',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#1D1D21',
        },
      },
      borderColor: {
        brand: {
          DEFAULT: '#2D2D31',
        },
      },
    },
  },
  plugins: [],
};

export default config;
