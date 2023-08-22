/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            all: true,
            // https://vitest.dev/config/#coverage-exclude
            exclude: configDefaults.coverage.exclude?.concat([
                '**/node_modules/**',
                '**/*.generated.ts',
                '**/vite.config.ts',
                '**/vitest.config.ts',
                '**/react-app-env.d.ts',
                '**/.storybook',
                '**/.prettierrc.js',
                '**/.eslintrc.js',
                '**/*.stories.ts(x)',
                '**/*.stories.data.ts(x)',
            ]),
        },
    },
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
});
