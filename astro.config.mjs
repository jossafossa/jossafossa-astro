// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export const shikiTheme = 'github-dark';

export default defineConfig({
  integrations: [react()],
  compressHTML: process.env.COMPRESS !== 'false',
  markdown: {
    shikiConfig: {
      theme: shikiTheme,
      wrap: true,
    },
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  }
});