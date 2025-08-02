import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: [
      'js/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    languageOptions: { globals: globals.browser },
    env: { browser: true, es2021: true },
    parseOptions: { 'ecma Version': 12 },
  },
]);
