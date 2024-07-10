import type { Config } from 'tailwindcss';

const config = {
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Omit<Config, 'content'>;

export default config;
