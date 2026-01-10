# camphora-styled TODO

以下条目为可归类为“纯样式（CSS-only / 以 Token 为主）”的组件候选项，优先在 `packages/camphora-styled/src` 中实现样式，并在 `docs/` 中补充示例截图与色板/排版图。

1. Button 样式
	- 描述：纯样式按钮变体（primary/secondary/ghost/link）、尺寸 token、focus/hover/disabled 样式。
	- 实现路径建议：packages/camphora-styled/src/button.css.ts
	- 图片建议：色板与不同按钮尺寸示例图。

2. Card / Paper
	- 描述：卡片/表面样式，支持 small/medium/large、elevation（层级）与圆角作为布局属性。
	- 实现路径建议：packages/camphora-styled/src/card.css.ts
	- 图片建议：卡片尺寸矩阵与阴影层级示例。

3. Avatar
	- 描述：头像样式（circle/square）、尺寸 token、边框与 ring 样式、fallback initials。
	- 实现路径建议：packages/camphora-styled/src/avatar.css.ts
	- 图片建议：头像示例图与尺寸对照。

4. Badge / Tag
	- 描述：徽章/标签的语义色变体（solid/outline/ghost）。
	- 实现路径建议：packages/camphora-styled/src/preview.css.ts 或新建 badge.css.ts
	- 图片建议：小尺寸内联徽章与颜色示例。

5. Typography（排版）
	- 描述：基础字体尺度、h1-h6、body、caption、响应式规则及行高 token。
	- 实现路径建议：packages/camphora-styled/src/tokens/typo.css.ts 和 themes/font.css.ts
	- 图片建议：排版刻度图与示例文本样式对照。

6. Grid / Stack 布局原语
	- 描述：通用布局组件（Stack、Grid、Container）和 spacing/align Sprinkles。
	- 实现路径建议：packages/camphora-styled/src/stack.css.ts 及 utils/cardSprinkles.css.ts
	- 图片建议：布局示意图（垂直/水平堆叠、间距示例）。

7. 表单控件样式（视觉层）
	- 描述：原生输入样式（text/textarea/checkbox/radio/select），仅样式层面，使用原生控件保证可访问性。
	- 实现路径建议：packages/camphora-styled/src/input.css.ts
	- 图片建议：聚焦/激活/禁用状态截图。

8. Preview / Surface（预览块）
	- 描述：各类 surface 背景、paperPrimary/paperSecondary、点状或纹理背景样式。
	- 实现路径建议：packages/camphora-styled/src/preview.css.ts
	- 图片建议：预览网格与背景样式示例。

```markdown
# camphora-styled TODO

以下条目为可归类为“纯样式（CSS-only / 以 Token 为主）”的组件候选项，优先在 `packages/camphora-styled/src` 中实现样式，并在 `docs/` 中补充示例截图与色板/排版图。

1. Button 样式
   - 描述：纯样式按钮变体（primary/secondary/ghost/link）、尺寸 token、focus/hover/disabled 样式。
   - 实现路径建议：packages/camphora-styled/src/button.css.ts
   - 图片建议：色板与不同按钮尺寸示例图。

2. Card / Paper
   - 描述：卡片/表面样式，支持 small/medium/large、elevation（层级）与圆角作为布局属性。
   - 实现路径建议：packages/camphora-styled/src/card.css.ts
   - 图片建议：卡片尺寸矩阵与阴影层级示例。

3. Avatar
   - 描述：头像样式（circle/square）、尺寸 token、边框与 ring 样式、fallback initials。
   - 实现路径建议：packages/camphora-styled/src/avatar.css.ts
   - 图片建议：头像示例图与尺寸对照。

4. Badge / Tag
   - 描述：徽章/标签的语义色变体（solid/outline/ghost）。
   - 实现路径建议：packages/camphora-styled/src/preview.css.ts 或新建 badge.css.ts
   - 图片建议：小尺寸内联徽章与颜色示例。

5. Typography（排版）
   - 描述：基础字体尺度、h1-h6、body、caption、响应式规则及行高 token。
   - 实现路径建议：packages/camphora-styled/src/tokens/typo.css.ts 和 themes/font.css.ts
   - 图片建议：排版刻度图与示例文本样式对照。

6. Grid / Stack 布局原语
   - 描述：通用布局组件（Stack、Grid、Container）和 spacing/align Sprinkles。
   - 实现路径建议：packages/camphora-styled/src/stack.css.ts 及 utils/cardSprinkles.css.ts
   - 图片建议：布局示意图（垂直/水平堆叠、间距示例）。

7. 表单控件样式（视觉层）
   - 描述：原生输入样式（text/textarea/checkbox/radio/select），仅样式层面，使用原生控件保证可访问性。
   - 实现路径建议：packages/camphora-styled/src/input.css.ts
   - 图片建议：聚焦/激活/禁用状态截图。

8. Preview / Surface（预览块）
   - 描述：各类 surface 背景、paperPrimary/paperSecondary、点状或纹理背景样式。
   - 实现路径建议：packages/camphora-styled/src/preview.css.ts
   - 图片建议：预览网格与背景样式示例。

9. Skeleton / Placeholder
   - 描述：纯 CSS 的骨架屏与 shimmer 占位效果。
   - 实现路径建议：packages/camphora-styled/src/skeleton.css.ts 或 preview.css.ts
   - 图片建议：加载前后对比截图。

10. IconButton 与图标尺寸体系
	- 描述：图标按钮的视觉规则（hit area、padding、size token），配合图标尺寸矩阵。
	- 实现路径建议：packages/camphora-styled/src/interactive.css.ts
	- 图片建议：图标尺寸矩阵图。

11. CSS-only Tabs
	- 描述：使用 radio/checkbox 技术实现无 JS 的 Tabs（含键盘/聚焦样式说明）。
	- 实现路径建议：packages/camphora-styled/src/tabs.css.ts
	- 图片建议：Tabs 状态切换截图与结构示意图（可引用 README 的 mermaid 图）。

12. CSS-only Drawer / Dropdown（可选）
	- 描述：提供简单场景下的 CSS-only drawer 与 dropdown 示例（checkbox hack），并在文档中标注可访问性与复杂交互下需 JS 的提示。
	- 实现路径建议：packages/camphora-styled/src/drawer.css.ts 和 dropdown.css.ts
	- 图片建议：打开/关闭状态示意与注意事项截图。

13. Select (Common, daisyUI-inspired)
   - 描述：Common `<select>` visual system inspired by daisyUI：支持常用变体（`select`、`select-bordered`、`select-ghost`、`select-primary`）、尺寸（`select-sm`/`select-md`/`select-lg`）、图标（leading/trailing）、multiple 样式与 disabled/focus 状态。优先使用原生 `<select>` 可访问性，复杂功能（searchable / virtualized options）需最小 JS 辅助并在文档中明确标注。
   - 实现路径建议：packages/camphora-styled/src/select.css.ts
   - 图片建议：variant gallery（bordered/ghost/primary）、尺寸矩阵、closed/open/multiple/disabled 状态截图。

14. Tooltip (CSS-only)
	- 描述：Tooltip visuals using `::after`/`::before` and data attributes; arrow variants and placement tokens; files: packages/camphora-styled/src/tooltip.css.ts; docs: placement matrix image.

15. Collapse / Accordion
	- 描述：Use native `<details>`/`<summary>` and CSS polyfills for collapse behavior; styles for open/closed states; files: packages/camphora-styled/src/collapse.css.ts; docs: state screenshots and accessibility notes.

16. Alert / Callout
	- 描述：Pure-style alert variants (info/warning/error/success) with icon and color tokens; files: packages/camphora-styled/src/alert.css.ts; docs: variant gallery image.

17. Progress / Meter
	- 描述：Visual progress bar and circular meter styles (CSS only); size and color tokens; files: packages/camphora-styled/src/progress.css.ts; docs: progress examples image.

18. Breadcrumb / Pagination
	- 描述：Layout utilities for breadcrumb and pagination visual styles; focus/active states; files: packages/camphora-styled/src/breadcrumb.css.ts and pagination.css.ts; docs: navigation examples.

19. Modal (CSS-demo)
	- 描述：CSS-only modal demo (checkbox hack or `:target`) for simple docs/examples; clearly document limitations and prefer JS for production; files: packages/camphora-styled/src/modal.css.ts; docs: usage and caveats image.

20. Dropdown (enhanced)
	- 描述：Styling for dropdown panels (alignment, shadow, arrow) while noting JS needed for complex interactions; files: packages/camphora-styled/src/dropdown.css.ts; docs: alignment matrix screenshots.

21. Rating (CSS-only)
	- 描述：Star/heart rating visuals using radio inputs and CSS; focus/keyboard accessibility notes; files: packages/camphora-styled/src/rating.css.ts; docs: rating state image.

22. Toast / Notification (visual)
	- 描述：Pure visual styles for toast messages; auto-dismiss needs JS, document sample JS; files: packages/camphora-styled/src/toast.css.ts; docs: toast stack screenshots.

23. Navbar / Menu layout
	- 描述：Header/navbar layout primitives and dropdown menu visuals; responsive token rules; files: packages/camphora-styled/src/navbar.css.ts; docs: navbar examples and responsive screenshots.

24. Breadcrumb / Stats / Misc small components
	- 描述：Small UI primitives from daisyUI (stats, hero, mock banner) suitable as pure-style templates; files: packages/camphora-styled/src/misc.css.ts; docs: mini gallery image.

备注：
- 上述条目优先聚焦在视觉与 token（颜色/尺寸/层级）层面，交互复杂或需 JS 的组件（例如复杂的菜单、拖拽、拖拽排序）不推荐列为纯样式组件。
- 文档中建议为每个组件配套：色板（color swatches）、排版刻度、组件状态截图（idle/hover/focus/active/disabled）、实现路径示例。

```
