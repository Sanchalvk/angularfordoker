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
    'plugin:@angular-eslint/template/recommended',
    'prettier', // Add Prettier integration (make sure it's last)
  ],
  rules: {
    // Add your custom rules or overrides here
    'no-console': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',

    // More specific rules (the ones you wanted to add earlier)
    'no-unused-vars': 'warn',
    'no-empty-function': 'warn',
    'curly': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],

    // Angular specific rules (the ones you provided previously)
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'kebab-case',
        prefix: 'app', // Or your preferred prefix
      },
    ],
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'camelCase',
        prefix: 'app', // Or your preferred prefix
      },
    ],
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',

    // TypeScript specific rules (the ones you just provided)
    '@typescript-eslint/no-explicit-any': 'warn', // Warn against using 'any' type
    // '@typescript-eslint/no-unused-vars': 'warn', // You might want to enable this and disable the base 'no-unused-vars'
    '@typescript-eslint/no-inferrable-types': 'warn', // Warn against explicitly typing values that can be inferred
    '@typescript-eslint/no-non-null-assertion': 'warn', // Warn against using the non-null assertion operator (!)

    // Prettier handles most formatting rules, so you might disable conflicting ESLint rules
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'quotes': 'off', // Disable ESLint's rule as Prettier will handle it
    'semi': 'off',   // Disable ESLint's rule as Prettier will handle it
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
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        // Explicitly enable the banana-in-box rule (just to be sure it's intended)
        '@angular-eslint/template/banana-in-box': 'error',
        // Add other specific rules for Angular templates here if needed
      },
    },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'prettier', // Enforce Prettier on TS files as well (optional)
      ],
      rules: {
        // You can adjust TypeScript specific rules here, or rely on the root level
        '@typescript-eslint/no-unused-vars': 'warn', // Enable if you want TypeScript's version
        'no-unused-vars': 'off', // Disable the base JS rule if you enable the TS one
      },
    },
  ],
};
