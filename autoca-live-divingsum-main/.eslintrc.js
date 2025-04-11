module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@angular-eslint/template',
    '@angular-eslint/eslint-plugin',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
    'prettier', // Add Prettier integration (make sure it's last)
  ],
  rules: {
    // Your existing rules
    'no-console': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-unused-vars': 'warn',
    'no-empty-function': 'warn',
    'curly': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    '@angular-eslint/component-selector': [/* ... */],
    '@angular-eslint/directive-selector': [/* ... */],
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'quotes': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    'keyword-spacing': 'off',
    'no-trailing-spaces': 'off',
  },
  overrides: [
    {
      files: ['*.component.html', '*.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        // Add other template-specific rules here
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser', // Explicitly set the TS parser for TS files
      plugins: ['@typescript-eslint', '@angular-eslint/eslint-plugin'], // Include necessary plugins
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'prettier',
      ],
      rules: {
        // Your TypeScript-specific rules (can be the same as root if desired)
      },
    },
  ],
};
