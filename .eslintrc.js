module.exports = {
    "extends": [
        "google"
    ],
    "plugins": [
        "no-async-without-await"
    ],

    "parserOptions": {
        "ecmaVersion": 8,
    },
    "rules": {
        "no-async-without-await/no-async-without-await": 1,
        "max-len": 0,
        "quotes": 0,
        "semi": 0
    },

};
