# 选项卡（仅 CSS）(Tabs)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/tabs.css.ts
- **Token**：间距、选中/未选颜色、聚焦样式
- **指南**：实现基于 radio/checkbox 的选项卡，保证键盘可用性并记录其限制。

## 组件
- **文件**：packages/camphora-react/src/components/Tabs/index.tsx（可选）
- **API**：最小封装或使用原生输入的示例；`className` 透传。

## 示例
- **文档页**：apps/website/app/(docs)/components/tabs/page.tsx
- **分组**：仅 CSS 的选项卡示例、键盘行为说明。

## 测试
- **Playwright**：快照与键盘导航测试。
