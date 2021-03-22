module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', 'tsconfig.json', '!.prettierrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'Logger' }],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
