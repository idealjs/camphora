# 骨架 / 占位（Skeleton / Placeholder）

计划：根据 `New-Component.md` 实施样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/skeleton.css.ts 或 preview.css.ts
- **Token**：闪动速度、基色/前景色、圆角
- **指南**：使用渐变与 keyframes 实现纯 CSS 的闪动效果，提供块级与内联的骨架类。

## 组件
- **文件**：packages/camphora-react/src/components/Skeleton/index.tsx（可选）
- **API**：`className`、`variant`、`size` 的透传。

## 示例
- **文档页**：apps/website/app/(docs)/components/skeleton/page.tsx
- **分组**：文本/缩略图/列表骨架，以及闪动开关示例。

## 测试
- **Playwright**：加载状态的快照。
