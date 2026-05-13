// @ts-check
import { defineConfig } from 'astro/config';

export const shikiTheme = 'github-dark';

export default defineConfig({
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