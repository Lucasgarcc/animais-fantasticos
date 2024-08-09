/* eslint-disable import/no-extraneous-dependencies */
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import i18n from "eslint-plugin-i18n";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("airbnb-base"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "parser": "flow"
        }
      ],
    plugins: {
      i18n,
      import: importPlugin,
      prettier,
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "prettier/prettier": "error",
      "no-console": 0,
      "no-debugger": "warn",
      "no-param-reassign": 0,
      "import/extensions": 0,
      "import/default": 0,
      "import/namespace": 0,
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      eqeqeq: "error",
      curly: "error",
      "brace-style": ["error", "1tbs"],
    },
  },
];
