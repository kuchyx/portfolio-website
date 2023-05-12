module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends:
  [
    `standard-with-typescript`,
    `plugin:@typescript-eslint/recommended`,
    `eslint:all`
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`
  },
  rules: {
    quotes: [
`error`,
`backtick`
    ]
  }
}
