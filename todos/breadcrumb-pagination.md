# 面包屑 / 分页 (Breadcrumb / Pagination)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/breadcrumb.css.ts 与 pagination.css.ts
- **Token**：间距、分隔符颜色、激活状态
- **指南**：提供可访问的聚焦与激活样式，保持布局响应式。

## 组件
- **文件**：packages/camphora-react/src/components/Breadcrumb/index.tsx 与 Pagination/index.tsx
- **API**：将 props 与 `className` 转发的最小封装。

## 示例
- **文档页**：apps/website/app/(docs)/components/breadcrumb-pagination/page.tsx
- **分组**：面包屑链、紧凑分页、聚焦/激活演示。

## 测试
- **Playwright**：导航组件与键盘聚焦行为的快照。
