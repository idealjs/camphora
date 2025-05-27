import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("next/core-web-vitals"),

    plugins: {
        "simple-import-sort": simpleImportSort,
    },

    rules: {
        quotes: ["warn", "double", {
            avoidEscape: true,
        }],

        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",

        "react-hooks/exhaustive-deps": [1, {
            enableDangerousAutofixThisMayCauseInfiniteLoops: true,
        }],
    },
}]);