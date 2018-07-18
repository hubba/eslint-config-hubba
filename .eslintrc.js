const hubbaLint = require('./index');

module.exports = Object.assign(hubbaLint, {
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended'
});
