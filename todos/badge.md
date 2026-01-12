# 徽章 / 标记 (Badge / Tag)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/badge.css.ts（或 preview.css.ts）
- **Token**：语义颜色 token、尺寸、边框/描边
- **指南**：提供 `badgeSolid`、`badgeOutline`、`badgeGhost` 等类以及小号尺寸 token。

## 组件
- **文件**：packages/camphora-react/src/components/Badge/index.tsx
- **API**：简单封装，`className` 透传。

## 示例
- **文档页**：apps/website/app/(docs)/components/badge/page.tsx
- **分组**：颜色变体与尺寸示例。

## 测试
- **Playwright**：变体的视觉快照。
