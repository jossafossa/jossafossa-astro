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
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    breakpoints: [160, 320, 640, 960, 1280, 1600, 2000, 3000],
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  }
});