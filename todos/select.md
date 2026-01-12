# 选择器 (Select)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/select.css.ts
- **Token**：尺寸（sm/md/lg）、变体（bordered/ghost/primary）、图标间距
- **指南**：为原生 `<select>` 添加可访问样式；记录可搜索/虚拟化等高级功能对 JS 的需求。

## 组件
- **文件**：packages/camphora-react/src/components/Select/index.tsx
- **API**：转发原生 props；提供用于图标放置的小封装。

## 示例
- **文档页**：apps/website/app/(docs)/components/select/page.tsx
- **分组**：变体画廊、禁用、多个选择的视觉示例。

## 测试
- **Playwright**：打开/关闭状态与多选视觉的快照。
