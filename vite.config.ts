import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3040,
    strictPort: true,
  },
  preview: {
    port: 3030,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.ts'],
    coverage: {
      enabled: true,
      exclude: [
        '**.config.**',
        '.**.**',
        'src/routes/*',
        'src/components/ui/*',
        'src/main.tsx',
      ],
    },
    exclude: [...configDefaults.exclude],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
