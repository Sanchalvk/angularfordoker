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
    // Add other style guides or configurations as needed (e.g., 'prettier')
  ],
  rules: {
    // Add your custom rules or overrides here
    'no-console': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        // Add specific rules for Angular templates
      },
    },
  ],
};
