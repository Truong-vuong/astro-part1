import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
import { onClickDirective } from './src/utils/index.js';
export default defineConfig({
  integrations: [
   vue(),
   onClickDirective(),
  ]
});