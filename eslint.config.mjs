import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      js,
      prettier: prettierPlugin,
      "@typescript-eslint": ts,
    },
    rules: {
      // Regras básicas do ESLint e do plugin TypeScript
      "prettier/prettier": "error", // essa regra faz o ESLint reclamar se o código não segue o Prettier
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended", // essa extensão já ativa o plugin prettier e desativa regras conflitantes
      "prettier", // eslint-config-prettier para desativar regras que conflitam com Prettier
    ],
  },
]);
