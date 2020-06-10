module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "explicit-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module",
        "project": ["tsconfig.json", "tsconfig.test.json"]
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
