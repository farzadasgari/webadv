import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import {globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default tseslint.config([
    globalIgnores(['dist', 'src/components/ui/**']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            prettier,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'react-refresh/only-export-components': 'warn',
            'react/prop-types': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
        settings: {
            react: {version: 'detect'},
        },
    },
]);