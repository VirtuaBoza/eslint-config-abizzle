module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: [
    "sort-destructure-keys",
    "sort-imports-es6-autofix",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "no-console": ["warn", { allow: ["debug", "warn", "error"] }],
    "no-var": "warn",
    "prefer-const": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-imports-es6-autofix/sort-imports-es6": ["warn"],
    "sort-keys-fix/sort-keys-fix": "warn",
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
  },
};
