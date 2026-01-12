# 排版 (Typography)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/tokens/typo.css.ts 与 themes/font.css.ts
- **Token**：字体大小、行高、h1-h6 / 正文 / 注释 的刻度 token
- **指南**：定义响应式刻度并映射到实用类。

## 组件
- **文件**：（无需 React 封装）从 styled 包导出实用类。

## 示例
- **文档页**：apps/website/app/(docs)/components/typography/page.tsx
- **分组**：标题刻度、正文尺寸、响应式示例。

## 测试
- **Playwright**：渲染示例文本页面并做快照。
