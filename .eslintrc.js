module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
    sourceType: "module",
  },
  plugins: ["prettier", "unused-imports"],
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "error",
    "prettier/prettier": "warn",
    "react/prop-types": "off",
    "prefer-const": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "warn",
  },
  ignorePatterns: ["generated*"],
};
