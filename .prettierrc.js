module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  arrowParens: 'avoid',
  bracketSpacing: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  proseWrap: 'always',
  printWidth: 80,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 120,
      },
    },
  ],
}
