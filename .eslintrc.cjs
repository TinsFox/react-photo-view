module.exports = {
  extends: ['plugin:@next/next/recommended', 'eslint-config-ali/typescript/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'import/no-cycle': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/require-ts-comment-description': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
