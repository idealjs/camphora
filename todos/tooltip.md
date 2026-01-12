# 提示气泡（仅 CSS）(Tooltip)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/tooltip.css.ts
- **Token**：位置偏移、箭头尺寸、过渡
- **指南**：使用 `::before`/`::after` 与 data 属性实现；提供位置 token 与箭头变体。

## 组件
- **文件**：packages/camphora-react/src/components/Tooltip/index.tsx（可选的小型辅助）
- **API**：用于将提示文本附加到子元素的辅助；仍建议使用 data-attribute 的用法。

## 示例
- **文档页**：apps/website/app/(docs)/components/tooltip/page.tsx
- **分组**：位置矩阵与箭头样式。

## 测试
- **Playwright**：提示位置的快照；悬停/聚焦检查。
