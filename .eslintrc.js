/*
https://eslint.org/docs/user-guide/configuring
set global env
*/
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  globals: {
    chrome: true
  },
  extends: [
    'standard'
  ]
}