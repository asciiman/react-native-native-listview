module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "describe": true,
    "it": true,
    "expect": true
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "prefer-const": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "object-shorthand": [
      "error"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "no-array-constructor": [
      "error"
    ],
    "array-callback-return": [
      "error"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "no-param-reassign": [
      "error"
    ],
    "prefer-arrow-callback": [
      "error"
    ],
    "arrow-spacing": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-iterator": [
      "error"
    ],
    "no-restricted-syntax": [
      "error"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],
    "dot-notation": [
      "error"
    ],
    "eqeqeq": [
      "error"
    ],
    "no-nested-ternary": [
      "error"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "brace-style": [
      "error"
    ],
    "space-before-blocks": [
      "error"
    ],
    "keyword-spacing": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "eol-last": [
      "error"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error"
    ],
    "array-bracket-spacing": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error"
    ],
    "key-spacing": [
      "error"
    ],
    "object-curly-spacing": [
      "error",
      "always", {
        "objectsInObjects": false,
        "arraysInObjects": false
      }
    ],
    "camelcase": [
      "error"
    ],
    "no-trailing-spaces":[
      "error"
    ],
    "no-multi-spaces":[
      "error"
    ],
    "no-irregular-whitespace":[
      "error"
    ],
    "new-cap": [
      "error"
    ],
    "react/jsx-pascal-case": [
      "error"
    ],
    "jsx-quotes": [
      "error"
    ],
    "react/jsx-curly-spacing": [
      "error"
    ],
    "react/jsx-boolean-value": [
      "error"
    ],
    "no-console": 0
  }
};
