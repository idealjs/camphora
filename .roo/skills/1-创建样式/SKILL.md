**新组件实践指南（中文）——创建样式**

本文档记录了在本 monorepo 中新增 UI 组件的可复用流程，以 <component> 组件为示例。目标是形成一套可重复、可复用的惯例：样式通过类名控制、React 组件保持精简。

**目标**
- 样式使用 `@vanilla-extract`（集中在 `@idealjs/camphora-styled` 包）：颜色、尺寸、状态等变体以类的形式存在。
- React 组件接口尽量最小化——仅接受 `className` 与原生 HTML 属性，不增加过多自定义 props。

**前置准备**
- 如需新视觉原语，先在 `packages/camphora-styled/src/tokens` 中新增或复用 token（颜色、尺寸、层级、字体等）。
- 确保 `packages/camphora-styled/src/index.ts` 导出新增的样式文件。

**本次示例涉及的文件**
- `packages/camphora-styled/src/<component>.css.ts` —— 基础样式与变体类（如 `<componentPrimary>`, `<componentSm>`）。

**可复用步骤（样式部分）**
1. 设计 token 与样式
	 - 在 `packages/camphora-styled/src/tokens` 中新增或复用所需 token（颜色、尺寸、层级、排版）。
	 - 使用 `@vanilla-extract/css` 在 `packages/camphora-styled/src/<component>.css.ts` 中实现基础 `<component>` 样式。
	 - 将变体（颜色、尺寸、状态）实现为独立类，且通过选择器与基础 `<component>` 组合（例如使用 `${<component>}&` 模式），保持选择器简洁且低优先级。
	 - 注意：在 `selectors` 对象中，使用 `${baseClass}&` 来表示当元素同时具有基础类和当前变体类时应用样式。这利用了 vanilla-extract 的 `&` 占位符，代表当前类的名称。避免直接嵌套选择器，因为 vanilla-extract 不支持 Sass 风格的嵌套。

**为什么优先用类名？**
- 将视觉变体放在样式层（类名 + token）能保持组件 API 的简洁性，避免将视觉控制逻辑混入 React 层，使样式更可复用、可替换。

**注意与约定**
- 保持 CSS 选择器优先级低且清晰，推荐使用 `selectors` 与 `${base}&` 的组合模式。
- 组件层尽量减少自定义 props，把视觉与主题相关的变化交给 token 与类名。

记录时间：2026-01-10
