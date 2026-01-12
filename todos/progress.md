# 进度 / 计量 (Progress / Meter)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/progress.css.ts
- **Token**：轨道颜色、填充颜色、圆角、尺寸 token
- **指南**：实现线性与圆形的视觉样式；保持纯视觉实现（动画可选择使用 JS）。

## 组件
- **文件**：packages/camphora-react/src/components/Progress/index.tsx
- **API**：`value`、`max`、`className`、`size` 等 props；在适用时透传原生属性。

## 示例
- **文档页**：apps/website/app/(docs)/components/progress/page.tsx
- **分组**：线性尺寸、圆形示例、动画演示。

## 测试
- **Playwright**：不同值与尺寸的快照。
