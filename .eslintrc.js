const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  settings: {
    react: {
      /**
       * "detect" automatically picks the version you have installed.
       * You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
       * default to latest and warns if missing
       */
      version: "detect", // It will default to "detect" in the future
      // "version": "detect"
      // "version": "16.12.0"
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": RULES.OFF,
    "react/prop-types": RULES.OFF,
    semi: RULES.OFF,
    quotes: RULES.OFF,
    "space-before-function-paren": RULES.OFF,
    "comma-dangle": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
  },
};
