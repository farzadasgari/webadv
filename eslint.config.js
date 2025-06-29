import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import {globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier'; // Add Prettier integration

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            prettier, // Disable ESLint rules that conflict with Prettier
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'react-refresh/only-export-components': 'warn', // Warn if components aren't exported
            'react/prop-types': 'off', // Disable PropTypes (optional, since TypeScript handles types)
            '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow implicit return types
        },
        settings: {
            react: {version: 'detect'}, // Auto-detect React version
        },
    },
]);