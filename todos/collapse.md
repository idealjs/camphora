# 折叠 / 手风琴 (Collapse / Accordion)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/collapse.css.ts
- **Token**：过渡时长、图标旋转 token、间距
- **指南**：优先使用原生 `<details>`/`<summary>` 模式；用选择器处理展开/收起状态样式。

## 组件
- **文件**：packages/camphora-react/src/components/Collapse/index.tsx（可作为 `<details>` 的封装）
- **API**：转发原生 props 与 `className`。

## 示例
- **文档页**：apps/website/app/(docs)/components/collapse/page.tsx
- **分组**：单个折叠、手风琴分组、可访问性说明。

## 测试
- **Playwright**：展开/收起状态和键盘交互的快照测试。
