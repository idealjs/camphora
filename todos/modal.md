# 模态框（CSS 演示）

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/modal.css.ts
- **Token**：遮罩颜色/不透明度、面板圆角、过渡 token
- **指南**：在文档中提供使用 `:target` 或 checkbox hack 的 CSS 演示；记录其限制并建议在生产中使用 JS 实现以获得完整可访问性。

## 组件
- **文件**：packages/camphora-react/src/components/Modal/index.tsx（可选的 JS 增强模式）
- **API**：JS 版本提供 `open` / `onClose`；对于 CSS 演示则提供相应的标记示例。

## 示例
- **文档页**：apps/website/app/(docs)/components/modal/page.tsx
- **分组**：仅 CSS 的演示画廊与带焦点陷阱说明的 JS 增强示例。

## 测试
- **Playwright**：展开/关闭状态的快照；如实现 JS 版本则测试焦点陷阱。
