---
sidebar_label: tsconfig
sidebar_position: 3
---


# @asiareal/config-ts

TS 配置文件

# 安装

```bash
pnpm add @asiareal/config-ts -D
# or
yarn add @asiareal/config-ts -D
# or
npm install @asiareal/config-ts -D
```

# 使用

项目根目录创建 `tsconfig.json` 文件，内容如下：

```json
{
  "extends": "@asiareal/config-ts"
}
```

# 自定义

```json
{
  "extends": "@asiareal/config-ts",
  "compilerOptions": {
    "target": "ESNext",
    "noEmit": true,
    "moduleResolution": "node"
  },
  "include": ["pages"]
}
```
