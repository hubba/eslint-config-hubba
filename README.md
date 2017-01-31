This is Hubba's shared ESLint configuration to be used across all JS environments.

# Instructions

## Install

```
npm install --save-dev eslint-config-hubba
```

## Integrate

Head to your project root and create a new `.eslintrc.js` file and add the following configuration at the top of the file

```
module.exports = {
    extends: 'eslint-config-hubba'
};
```

## Extend

This will expand in future versions, but you can add your own custom project rules by extending your local `.eslintrc.js` file:

```
module.exports = {
    extends: 'eslint-config-hubba',
    rules: {
        'no-console': 'error'
    }
};
```

