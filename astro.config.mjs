// @ts-check
import { defineConfig } from 'astro/config';
import cssnano from 'cssnano';
import { createHash } from 'crypto';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  compressHTML: process.env.COMPRESS !== 'false',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      modules: {
        generateScopedName: (name, filename) => {
          const isDebug = process.env.COMPRESS === 'false';

          if (isDebug) {
            const hash = createHash('md5')
              .update(filename)
              .digest('base64')
              .substring(0, 6)
              .replace(/[+/=]/g, '');
            return `_${name}_${hash}`;
          }

          const hash = createHash('md5')
            .update(filename + name)
            .digest('base64')
            .substring(0, 6)
            .replace(/[+/=]/g, '')
            .replace(/^[0-9]/, '_');
          return hash;
        }
      },
      postcss: {
        plugins: [
          cssnano({
            preset: ['advanced', {
              discardComments: { removeAll: true },
              reduceIdents: true,
              mergeIdents: true,
              zindex: false,
            }]
          })
        ]
      }
    }
  }
});