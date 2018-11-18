module.exports = {
    "env": {
        "browser": false,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "rules": {
        "indent": [
          "error",
          2,
          { "SwitchCase": 1}
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
      "strict": 0,
      "no-var": 2,
      "no-console": 0
    }
};

