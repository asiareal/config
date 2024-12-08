---
sidebar_label: prettier
sidebar_position: 0
---


# @asiareal/config-prettier

Prettier 配置文件

# 安装

```bash
pnpm add @asiareal/config-prettier -D
# or
yarn add @asiareal/config-prettier -D
# or
npm install @asiareal/config-prettier -D
```

# 使用

项目根目录创建 `.prettierrc.json` 文件，内容如下：

```json
"@asiareal/config-prettier"
```

# 自定义

在项目根目录创建 `.prettierrc.js` 文件，内容如下：

```js
import defaultConfig from '@asiareal/config-prettier';

export default {
  ...defaultConfig,
  semi: false,
};
```
