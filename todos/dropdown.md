# 下拉 (增强版 Dropdown)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/dropdown.css.ts
- **Token**：对齐偏移、阴影、箭头尺寸、z-index token
- **指南**：样式化面板与对齐；明确提示复杂行为（定位、焦点管理）需要 JS 支持。

## 组件
- **文件**：packages/camphora-react/src/components/Dropdown/index.tsx
- **API**：保持 props 精简；允许可选的 JS 管理打开状态以满足高级使用场景。

## 示例
- **文档页**：apps/website/app/(docs)/components/dropdown/page.tsx
- **分组**：简单样式面板、对齐示例、JS 增强的焦点管理示例。

## 测试
- **Playwright**：对齐矩阵与打开/关闭交互的快照。
