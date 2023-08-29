module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"

    },
    "ignorePatterns": ["temp.js", "**/vendor/*.js", ".eslintrc.cjs"],
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "indent": "off",
        "@typescript-eslint/indent": "off",
        "no-trailing-spaces": "off",
        "react/prop-types":"off",
        //"react/jsx-no-target-blank": "off"
    }
}
