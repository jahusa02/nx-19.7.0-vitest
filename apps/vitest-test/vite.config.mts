/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vitest-test',

  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    watch: false,
    passWithNoTests: true,
    clearMocks: true,
    globals: true,
    environment: 'node',
    coverage: {
      enabled: true,
      thresholds: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
      all: false,
      reporter: ['text', 'lcov'],
      provider: 'istanbul',
    },
    fakeTimers: {
      now: 1588550400000,
      toFake: ['Date'],
    },

    reporters: ['default'],
    
  },
});
