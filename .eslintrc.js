// https://eslint.org/docs/rules/
module.exports = {
    "env": {
        "browser": false,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab",
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "semi": [
            "error",
            "never",
        ],
        "no-console": "off",
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "no-multi-spaces": 2,
        "array-bracket-spacing": 2,
        "brace-style": [
            "error",
            "1tbs",
        ],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "key-spacing": [2, {
            "singleLine": {
                "beforeColon": false,
                "afterColon": true,
            },
            "multiLine": {
                "beforeColon": false,
                "afterColon": true,
            }
        }]
    }
}