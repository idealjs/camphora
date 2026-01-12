# 头像 (Avatar)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/avatar.css.ts
- **Token**：尺寸 token、边框、环形效果、备用背景色
- **指南**：提供圆形/方形变体、尺寸 token，并为首字母等备用内容提供样式。

## 组件
- **文件**：packages/camphora-react/src/components/Avatar/index.tsx
- **API**：类似 `img` 的属性，支持可选 `fallback` 内容；`className` 透传。

## 示例
- **文档页**：apps/website/app/(docs)/components/avatar/page.tsx
- **分组**：尺寸矩阵、形状变体、备用首字母示例。

## 测试
- **Playwright**：头像变体的视觉快照。
