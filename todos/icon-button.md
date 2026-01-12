# 图标按钮 (IconButton)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/interactive.css.ts
- **Token**：触控区域尺寸、内边距 token、图标尺寸矩阵
- **指南**：确保最小触控区域，提供 `iconButtonSm/Md/Lg` 类。

## 组件
- **文件**：packages/camphora-react/src/components/IconButton/index.tsx
- **API**：类似 `button` 的 props，须支持 `aria-label`，并透传 `className`。

## 示例
- **文档页**：apps/website/app/(docs)/components/icon-button/page.tsx
- **分组**：仅图标、图标+标签、禁用、聚焦状态示例。

## 测试
- **Playwright**：快照与键盘触发测试。
