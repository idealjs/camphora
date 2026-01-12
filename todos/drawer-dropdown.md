# 抽屉 / 仅 CSS 的下拉 (Drawer / CSS-only Dropdown)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/drawer.css.ts 与 dropdown.css.ts
- **Token**：遮罩、面板宽度、过渡 token
- **指南**：包含仅 CSS 的示例（如 checkbox hack），并明确记录可访问性与 JS 的限制。

## 组件
- **文件**：packages/camphora-react/src/components/Drawer 与 Dropdown（可选 JS 增强版本）
- **API**：保持组件 API 精简；在文档中优先展示 CSS 演示变体。

## 示例
- **文档页**：apps/website/app/(docs)/components/drawer-dropdown/page.tsx
- **分组**：仅 CSS 演示与带注意事项的 JS 增强演示。

## 测试
- **Playwright**：展开/收起状态的快照；并注明复杂交互的限制说明。
