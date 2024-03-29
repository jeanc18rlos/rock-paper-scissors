module.exports = {
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "jest",
    "import",
    "prettier",
    "jest-dom",
    "jsx-a11y",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",

    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.tsx", "**/*.test.ts"] },
    ],

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
