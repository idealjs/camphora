# 警示 / 提示

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/alert.css.ts
- **Token**：语义颜色 token、图标间距、圆角
- **指南**：提供 info/warning/error/success 等变体，处理图标对齐与可关闭视觉。

## 组件
- **文件**：packages/camphora-react/src/components/Alert/index.tsx
- **API**：`children`，可选 `dismissible` 属性（建议仅在 JS 版本中处理关闭），`className` 透传。

## 示例
- **文档页**：apps/website/app/(docs)/components/alert/page.tsx
- **分组**：变体画廊与关闭演示（JS 增强示例单独说明）。

## 测试
- **Playwright**：变体与关闭交互的快照。
