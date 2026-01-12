# 评分 (Rating)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/rating.css.ts
- **Token**：图标尺寸、间距、选中颜色
- **指南**：实现基于 radio 的星级/爱心评分视觉，并附加键盘可访问性说明。

## 组件
- **文件**：packages/camphora-react/src/components/Rating/index.tsx
- **API**：透传原生 input 属性；可选 `readOnly` 属性。

## 示例
- **文档页**：apps/website/app/(docs)/components/rating/page.tsx
- **分组**：内联评分、只读、大小尺寸示例。

## 测试
- **Playwright**：快照与键盘选择测试。
