import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3030,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/setupTest.ts'],
    },
});
