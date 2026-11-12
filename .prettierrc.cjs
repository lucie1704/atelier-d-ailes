/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-astro')],

  overrides: [
    {
      files: '*.astro',
      // Same as `compressHTML` in astro.config.ts, so formatting never changes the rendered whitespace
      options: { parser: 'astro', astroCompressHTML: true },
    },
  ],
};
