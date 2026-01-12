# 导航栏 / 菜单 (Navbar / Menu)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/navbar.css.ts 与 menu.css.ts
- **Token**：断点、间距、下拉对齐 token
- **指南**：提供头部布局原语与响应式规则；样式化导航栏中使用的下拉菜单。

## 组件
- **文件**：packages/camphora-react/src/components/Navbar/index.tsx 与 Menu/index.tsx
- **API**：最小化 props；提供 brand、nav items、actions 的插槽。

## 示例
- **文档页**：apps/website/app/(docs)/components/navbar-menu/page.tsx
- **分组**：响应式导航栏、菜单下拉示例。

## 测试
- **Playwright**：响应式断点与菜单交互的快照。
