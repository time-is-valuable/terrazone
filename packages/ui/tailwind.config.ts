import { Config } from 'tailwindcss';
import sharedConfig from '@terrazone/tailwind-config';

const config = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
} satisfies Pick<Config, 'presets' | 'content'>;

export default config;
