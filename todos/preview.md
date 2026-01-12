# 预览 / 表面 (Preview / Surface)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/preview.css.ts
- **Token**：表面颜色（paperPrimary/paperSecondary）、纹理 token
- **指南**：公开表面类并提供预览卡的使用示例。

## 组件
- **文件**：packages/camphora-react/src/components/Preview/index.tsx
- **API**：接受 `className` 与 `children` 的包装组件。

## 示例
- **文档页**：apps/website/app/(docs)/components/preview/page.tsx
- **分组**：表面调色板、纹理背景、对比度检查。

## 测试
- **Playwright**：跨主题的预览网格快照。
