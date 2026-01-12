# 吐司 / 通知 (Toast / Notification)

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/toast.css.ts
- **Token**：堆叠偏移、间距、颜色变体
- **指南**：提供仅视觉的吐司样式；自动消失行为需要少量 JS（在文档中提供示例）。

## 组件
- **文件**：packages/camphora-react/src/components/Toast/index.tsx
- **API**：视觉包装；对于自动消失，提供管理生命周期的示例辅助函数。

## 示例
- **文档页**：apps/website/app/(docs)/components/toast/page.tsx
- **分组**：变体画廊与 JS 自动消失示例片段。

## 测试
- **Playwright**：吐司堆栈与 JS 示例的消失交互快照。
