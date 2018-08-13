// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-redux',
  ],
  extends: [
    'airbnb',
    // "eslint:recommended"
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'react/jsx-indent': [2, 2], // error & 2 spaces
    'react/jsx-indent-props': [2, 2],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unused-state': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'no-unused-vars': 1,
    quotes: [2, 'single'],
    'react/jsx-quotes': 1,
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-return-assign': 1,
    semi: ['error', 'never'],
    'react/jsx-key': 2,
    'react/jsx-closing-tag-location': 2,
    'react/no-access-state-in-setstate': 2,
    'react/button-has-type': 2,
    'react/jsx-sort-props': 2,

    // configure when I have time
    'react/display-name': 1,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-extension': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/wrap-multilines': 1,
  },
}
