module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    // For TypeScript files
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        // Add your TS rules here
      },
    },
    // For Angular templates (HTML files)
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        // Add your template rules here
      },
    },
  ],
};
