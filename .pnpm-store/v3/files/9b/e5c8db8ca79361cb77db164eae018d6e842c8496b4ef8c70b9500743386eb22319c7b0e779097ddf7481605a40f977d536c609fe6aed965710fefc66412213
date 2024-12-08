"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const json5_1 = __importDefault(require("json5"));
const deepmerge_1 = __importDefault(require("deepmerge"));
// Add specific rules for rax compile-time miniapp
function default_1(config) {
    try {
        const buildConfigFilePath = path_1.default.join(process.cwd(), 'build.json');
        if (fs_1.default.existsSync(buildConfigFilePath)) {
            const buildConfig = json5_1.default.parse(fs_1.default.readFileSync(buildConfigFilePath, 'utf8'));
            const isCompileTime = (target) => (buildConfig.targets && buildConfig.targets.find((buildConfigTarget) => buildConfigTarget === target) &&
                buildConfig[target] && buildConfig[target].buildType === 'compile');
            // At present, only miniapp and wechat-miniprogram support build for compile-time
            if (isCompileTime('miniapp') || isCompileTime('wechat-miniprogram')) {
                // https://www.npmjs.com/package/eslint-plugin-rax-compile-time-miniapp
                const { configs } = require('eslint-plugin-rax-compile-time-miniapp');
                config.plugins = config.plugins || [];
                config.plugins.push('rax-compile-time-miniapp');
                // For some ci and jest test env, we chose set config instead 'plugin:rax-compile-time-miniapp/recommended'
                config.rules = (0, deepmerge_1.default)(config.rules || {}, configs.recommended.rules);
            }
        }
    }
    catch (error) {
        console.log('Add specific rules for rax compile-time miniapp failed!', error);
    }
    return config;
}
exports.default = default_1;
