# 网格 / 堆叠（布局原语）(Grid / Stack)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/stack.css.ts 与 utils/cardSprinkles.css.ts
- **Token**：间距、对齐、间隙 token
- **指南**：提供 `Stack` 实用类与响应式 sprinkles。

## 组件
- **文件**：packages/camphora-react/src/components/Stack/index.tsx（可选的封装）
- **API**：接受 `className`、可选的 `as` prop 与 children。

## 示例
- **文档页**：apps/website/app/(docs)/components/stack/page.tsx
- **分组**：垂直/水平堆叠、间距变体。

## 测试
- **Playwright**：布局画廊的快照。
