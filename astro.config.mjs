// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  compressHTML: process.env.COMPRESS !== 'false',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  }
});