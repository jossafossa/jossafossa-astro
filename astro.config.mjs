// @ts-check
import { defineConfig } from 'astro/config';
import cssnano from 'cssnano';
import { createHash } from 'crypto';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // HTML compressie: uit voor dev en debug builds, aan voor production
  compressHTML: process.env.COMPRESS !== 'false',
  vite: {
    css: {
      modules: {
        generateScopedName: (name, filename) => {
          // Check of we in debug mode zijn (COMPRESS=false)
          const isDebug = process.env.COMPRESS === 'false';

          if (isDebug) {
            // Debug build: leesbare class names
            const hash = createHash('md5')
              .update(filename)
              .digest('base64')
              .substring(0, 6)
              .replace(/[+/=]/g, '');
            return `_${name}_${hash}`;
          }

          // Production: korte hash-based class names
          const hash = createHash('md5')
            .update(filename + name)
            .digest('base64')
            .substring(0, 6)
            .replace(/[+/=]/g, '')
            .replace(/^[0-9]/, '_'); // Zorg dat het begint met letter/underscore
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
              zindex: false, // Veiliger: geen z-index optimalisatie
            }]
          })
        ]
      }
    }
  }
});