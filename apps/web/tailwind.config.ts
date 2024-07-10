import { type Config } from 'tailwindcss';
import sharedConfig from '@terrazone/tailwind-config';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [sharedConfig],
} satisfies Pick<Config, 'content' | 'presets'>;

export default config;
