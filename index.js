module.exports = {
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "forOf": true,
    "generators": true,
    "jsx": true,
    "objectLiteralShorthandProperties": true,
    "templateStrings": true
  },
  "env": {
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "comma-dangle": [0],
    "consistent-return": [1],
    "consistent-this": [1, "self"],
    "curly": [2],
    "default-case": [2],
    "dot-notation": [1],
    "eqeqeq": [2],
    "guard-for-in": [2],
    "indent": [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
    }],
    "linebreak-style": [2, "unix"],
    "max-nested-callbacks": [1, 3],
    "no-alert": [2],
    "no-caller": [2],
    "no-console": [0],
    "no-constant-condition": [0],
    "no-else-return": [2],
    "no-empty-label": [2],
    "no-eval": [2],
    "no-lone-blocks": [2],
    "no-multi-spaces": [2],
    "no-nested-ternary": [2],
    "no-self-compare": [2],
    "no-sequences": [2],
    "no-sync": [1],
    "no-throw-literal": [2],
    "no-trailing-spaces": [2],
    "no-underscore-dangle": [0],
    "no-useless-call": [2],
    "no-void": [2],
    "no-with": [2],
    "radix": [2],
    "semi": [2, "always"],
    "space-infix-ops": [2],
    "strict": [2, "global"],
    "vars-on-top": [2]
  },
  "settings": {
    "ecmascript": 6
  }
};
