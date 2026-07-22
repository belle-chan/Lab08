import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],

    ignores: [
      "node_modules/**",
      "build/**",
      "reports/**",
    ],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    plugins: {
      react: reactPlugin,
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["**/*.{test,spec}.{js,jsx}", "**/__tests__/**/*.{js,jsx}"],

    plugins: {
      jest: jestPlugin,
      "testing-library": testingLibraryPlugin,
    },

    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
      "testing-library/await-async-events": "off",
    },

    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        it: "readonly",
        jest: "readonly",
      },
    },
  },
]);