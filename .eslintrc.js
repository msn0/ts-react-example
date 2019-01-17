module.exports = {
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "jsx": true,
        "useJSXTextNode": true
    },
    "extends": "helmut",
    "plugins": [
        "react",
        "typescript"
    ],
    "rules": {
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "always",
                "spacing": {
                    "objectLiterals": "never"
                }
            }
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    },
    "globals": {
        "describe": true,
        "it": true
    }
};