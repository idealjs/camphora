# 卡片 / 纸面 (Card / Paper)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/card.css.ts
- **Token**：间距、圆角、层级（elevation）、背景 token
- **指南**：创建基础 `card` 类并提供尺寸与层级修饰类；视觉由 token 驱动。

## 组件
- **文件**：packages/camphora-react/src/components/Card/index.tsx
- **API**：简单封装，接受 `className` 与原生容器属性。

## 示例
- **文档页**：apps/website/app/(docs)/components/card/page.tsx
- **分组**：尺寸矩阵（small/medium/large）、层级画廊、圆角与方角对比。

## 测试
- **Playwright**：画廊页面的视觉快照。
