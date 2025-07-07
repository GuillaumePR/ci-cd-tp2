import js from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  js.configs.recommended,

  // Config globale
  {
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        Cypress: "readonly",
        cy: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        process: "readonly",
        console: "readonly",
        test: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // règles globales si besoin
    },
  },

  // Config spécifique aux fichiers Cypress
  {
    files: ["tests/e2e/**/*.js", "tests/e2e/**/*.cy.js"],
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      // règles spécifiques à Cypress
    },
  },
];
