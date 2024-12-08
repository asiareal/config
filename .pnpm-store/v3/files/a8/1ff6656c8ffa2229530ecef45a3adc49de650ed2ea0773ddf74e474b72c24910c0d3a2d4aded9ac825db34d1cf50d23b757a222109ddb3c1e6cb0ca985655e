"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vueESLintConfig = {
    extends: [
        // Fork from https://www.npmjs.com/package/eslint-config-ali
        // if not use require.resolve(), the @applint/eslint-config can't be find in @appworks/doctor(call with Node API)
        require.resolve('eslint-config-ali/vue'),
    ],
    globals: {
        weex: true,
    },
    rules: {
        // Fork from https://github.com/ice-lab/spec/blob/master/packages/spec/src/eslint/vue.js
        semi: 'off',
        '@typescript-eslint/semi': 'warn',
        'eol-last': 'warn',
        'quote-props': 'warn',
    },
};
exports.default = vueESLintConfig;
