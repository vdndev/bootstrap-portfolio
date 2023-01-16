module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier-scss",
  ],
  files: ["src/**/*.scss"],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
  plugins: [
    "stylelint-prettier",
  ],
  rules: {
    "scss/at-extend-no-missing-placeholder": true,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: [
          "attribute",
        ],
      },
    ],
  },
};
