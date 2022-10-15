import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
// Trying to fix adapter >:(
export default defineConfig({
    output: 'server',
    adapter: vercel(),
  });