# 表单控件（视觉）

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/input.css.ts
- **Token**：输入高度/尺寸 token、聚焦环、边框、占位符颜色
- **指南**：为原生控件（input、textarea、select、checkbox、radio）添加可访问的聚焦样式。

## 组件
- **文件**：packages/camphora-react/src/components/Form/*（可选的单独封装）
- **API**：透传原生 props 与 `className` 的最小封装。

## 示例
- **文档页**：apps/website/app/(docs)/components/form-controls/page.tsx
- **分组**：文本输入、textarea、复选框/单选、select 的视觉变体。

## 测试
- **Playwright**：以可访问性为中心的快照与键盘聚焦检查。
