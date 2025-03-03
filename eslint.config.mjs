import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['eslint-plugin-simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  }),
];

eslintConfig.forEach((config) => {
  console.log(config);
});
console.log(importPlugin);
export default eslintConfig;
