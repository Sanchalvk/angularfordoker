// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplateParser from '@angular-eslint/template-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  js.configs.recommended,
  ts.configs['recommended-type-checked'],
  angular.configs['recommended'],
  angular.configs['template-recommended'],

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: [join(__dirname, 'tsconfig.app.json')], // Changed to point to tsconfig.app.json (as an array) with absolute path
        tsconfigRootDir: __dirname, // Explicitly set the root directory
      },
    },
  },
  // ... other configurations
];
