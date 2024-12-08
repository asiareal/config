"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrettierConfig = exports.getCommitlintConfig = exports.getStylelintConfig = exports.getESLintConfig = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
const eslint_1 = __importDefault(require("./eslint"));
const stylelint_1 = __importDefault(require("./stylelint"));
const prettier_1 = __importDefault(require("./prettier"));
const commitlint_1 = __importDefault(require("./commitlint"));
// ESLint
function getESLintConfig(rule, userConfig = {}) {
    return (0, deepmerge_1.default)(eslint_1.default[rule] || {}, userConfig);
}
exports.getESLintConfig = getESLintConfig;
// stylelint
// Note: rule param is to compatible with @iceworks/spec
function getStylelintConfig(rule, userConfig = {}) {
    return (0, deepmerge_1.default)(stylelint_1.default, userConfig);
}
exports.getStylelintConfig = getStylelintConfig;
// commitlint
// Note: rule param is to compatible with @iceworks/spec
function getCommitlintConfig(rule, userConfig = {}) {
    return (0, deepmerge_1.default)(commitlint_1.default, userConfig);
}
exports.getCommitlintConfig = getCommitlintConfig;
// prettier
// Note: rule param is to compatible with @iceworks/spec
function getPrettierConfig(rule, userConfig = {}) {
    return (0, deepmerge_1.default)(prettier_1.default, userConfig);
}
exports.getPrettierConfig = getPrettierConfig;
