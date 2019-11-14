module.exports = {
    "extends": ["airbnb"],
    "env": {
      "es6": true,
      "node": true,
      "browser": true,
      "jest": true,
    },
    "plugins": [],
    "rules": {
      "react-hooks/rules-of-hooks": "off",
      // will discuss enabling with the team "react-hooks/exhaustive-deps": "warn",
      "import/prefer-default-export": "off",
      "import/prefer-default-export": "off",
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/label-has-for": "off",
      "react/jsx-one-expression-per-line": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/style-prop-object": [0],
      "linebreak-style": 0,
      "no-param-reassign": 0,
      "quotes": [2, "double", { "avoidEscape": true }],
      "comma-dangle": ["error", "never"]
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true,
        "experimentalObjectRestSpread": true,
      }
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["node_modules", "src/"]
        }
      }
    }
  };