"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRaxESLintConfig_1 = __importDefault(require("./getRaxESLintConfig"));
exports.default = (0, getRaxESLintConfig_1.default)({
    extends: [
        // if not use require.resolve(), the @applint/eslint-config can't be find in @appworks/doctor(call with Node API)
        require.resolve('@applint/eslint-config/typescript/rax-strict'),
    ],
    rules: {
        'react/self-closing-comp': 0,
    },
});
