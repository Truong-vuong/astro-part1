// https://astro.build/config
import { onClickDirective } from './src/utils/index.js';
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), onClickDirective(), svelte()]
});