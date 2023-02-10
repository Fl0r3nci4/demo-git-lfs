import { defineConfig } from 'astro/config';
import { BASE_URL } from './src/shared';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://emasuriano.github.io',
  base: BASE_URL,
  integrations: [image()],
});
