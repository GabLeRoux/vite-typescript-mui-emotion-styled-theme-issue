import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isDev = process.env.NODE_ENV === 'development';
const disableSourceMaps = process.env.DISABLE_SOURCEMAPS === 'true';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    build: {
        sourcemap: isDev ? true : !disableSourceMaps,
    },
});