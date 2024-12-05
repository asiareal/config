---
sidebar_label: 说明
sidebar_position: 0
---

# @asiareal/config-editorconfig

.editorconfig 配置文件

# 使用

项目根目录创建 `.editorconfig` 文件，添加内容如下：

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.mdx]
trim_trailing_whitespace = false
```