**新组件实践指南（中文）**

本文档记录了在本 monorepo 中新增 UI 组件的可复用流程，以 `button` 组件为示例。目标是形成一套可重复、可复用的惯例：样式通过类名控制、React 组件保持精简。

**目标**
- 样式使用 `@vanilla-extract`（集中在 `@idealjs/camphora-styled` 包）：颜色、尺寸、状态等变体以类的形式存在。
- React 组件接口尽量最小化——仅接受 `className` 与原生 HTML 属性，不增加过多自定义 props。
- 在 Next.js 文档站点中提供示例页面，分别展示“仅颜色变体”和“仅尺寸变体”的用法。

**前置准备**
- 如需新视觉原语，先在 `packages/camphora-styled/src/tokens` 中新增或复用 token（颜色、尺寸、层级、字体等）。
- 确保 `packages/camphora-styled/src/index.ts` 导出新增的样式文件。

**本次示例涉及的文件**
- `packages/camphora-styled/src/button.css.ts` —— 基础样式与变体类（如 `buttonPrimary`, `buttonSm`）。
- `packages/camphora-react/src/components/Button/index.tsx` —— 简洁的 React 包装组件，组合类并透传原生属性。
- `packages/camphora-react/src/components/index.ts` —— 将组件导出，供项目其他地方直接引用。
- `apps/website/app/(docs)/components/button/page.tsx` —— Next.js 示例页面，展示各类变体。

**可复用步骤（规范化流程）**
1. 设计 token 与样式
	 - 在 `packages/camphora-styled/src/tokens` 中新增或复用所需 token（颜色、尺寸、层级、排版）。
	 - 使用 `@vanilla-extract/css` 在 `packages/camphora-styled/src/button.css.ts` 中实现基础 `button` 样式。
	 - 将变体（颜色、尺寸、状态）实现为独立类，且通过选择器与基础 `button` 组合（例如使用 `${button}&` 模式），保持选择器简洁且低优先级。

2. 编写 React 组件
	 - 在 `packages/camphora-react/src/components/Button/index.tsx` 中创建组件。
	 - 组件约定：
		 - 默认导出 `Button` 函数组件。
		 - 接受 `PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>`，以便透传 `onClick`、`disabled`、`aria-*` 等原生属性。
		 - 使用 `clsx` 将外部 `className` 与基础 `button` 类合并；不引入变体类型的 props（例如 `variant="primary"`）——所有视觉变体通过类名控制。
	 - 示例实现：

		 ```tsx
		 import { button } from "@idealjs/camphora-styled";
		 import clsx from "clsx";

		 const Button = ({ children, className, ...rest }) => (
			 <button className={clsx(button, className)} {...rest}>
				 {children}
			 </button>
		 );

		 export default Button;
		 ```

3. 导出组件
	 - 在 `packages/camphora-react/src/components/index.ts` 中添加导出项，使其他包可直接通过 `@idealjs/camphora-react` 引入。

4. 在站点中添加示例页（Next.js）
	 - 在 `apps/website/app/(docs)/components/<component>/page.tsx` 下创建示例页面。
	 - 示例组织应将可互斥或正交的变体分开展示：
		 - 颜色组：展示 `buttonPrimary`、`buttonSecondary` 等，同一组不改变尺寸类。
		 - 尺寸组：展示 `buttonSm`、`buttonLg` 等，同一组不改变颜色类。
	 - 可复用项目内的 `Preview` 组件来包裹演示区域，保持风格一致。

5. 构建与验证
	 - 如需本地查看，先构建样式包并启动站点：

		 ```bash
		 yarn workspace @idealjs/camphora-styled build
		 cd apps/website
		 yarn dev
		 ```

6. 无障碍与细节打磨
	 - 确保 `aria-*` 属性可透传并生效（按需在示例里展示）。
	 - 在 CSS 中补充键盘可见的聚焦样式（`focus-visible` / `focus-within`），提升可访问性。

7. 发布流程
	 - 按 monorepo 的发布流程打包并发布（先 build typings 与包，再发布）。

**为什么优先用类名？**
- 将视觉变体放在样式层（类名 + token）能保持组件 API 的简洁性，避免将视觉控制逻辑混入 React 层，使样式更可复用、可替换。

**可复用的提示词模板（新增组件时使用）**

1. 创建名为 `<ComponentName>` 的新组件。
2. 在 `packages/camphora-styled/src/<component>.css.ts` 中，基于现有 token（或新增 token）实现基础样式与变体类。
3. 将颜色 / 尺寸 / 状态等变体作为独立类实现，并与基础类组合使用（不要在组件 props 中引入过多变体控制）。
4. 在 `packages/camphora-react/src/components/<ComponentName>/index.tsx` 中实现一个简洁的 React 包装组件，仅接受 `className` 与原生 HTML 属性。
5. 将组件导出到 `packages/camphora-react/src/components/index.ts`。
6. 在 `apps/website/app/(docs)/components/<component>/page.tsx` 添加示例页，分别展示正交变体（如“仅颜色”、“仅尺寸”）。
7. 构建样式包并运行站点以验证视觉与无障碍。
8. 更新文档，记录新增的 token 或设计决策。

**注意与约定**
- 使用 `clsx` 合并类名。
- 保持 CSS 选择器优先级低且清晰，推荐使用 `selectors` 与 `${base}&` 的组合模式。
- 组件层尽量减少自定义 props，把视觉与主题相关的变化交给 token 与类名。
- 若组件需要状态（例如打开/关闭），可以使用真实的 DOM 输入或内部状态实现，但仍建议把视觉状态由类名控制。

**组件状态约定**
- 组件应保持无状态（stateless）。若组件需要 UI 状态（例如 `visible` / 打开-关闭），应由外部通过 props 传入并由外部控制（例如传入 `visible` 和 `onClose`），组件内部不应持有 UI 可变状态。

**可访问性与按钮注意事项**
- 按钮元素应总是显式声明 `type`（例如 `type="button"`），以避免在表单内触发意外提交（遵循 `biomelint/a11y/useButtonType`）。
- 为可视化操作提供恰当的无障碍标签：优先使用 `aria-labelledby` 指向可见文本，其次使用清晰的 `aria-label`。在组件示例中记录 `aria-label` 的使用和替代方案。


  

---

记录时间：2026-01-10

**测试（Playwright 快照）**

- **目的**：为组件示例页添加视觉回归测试，使用 Playwright 的快照匹配器 `toMatchSnapshot()` 自动管理快照文件，无需手动写入输出目录。
- **示例测试（放在示例页同目录）**：

	```ts
	// apps/website/app/(docs)/components/button/page.spec.ts
	import { test, expect } from '@playwright/test';

	test('button page - snapshot', async ({ page }) => {
		await page.goto('http://localhost:3000/components/button', { waitUntil: 'networkidle' });
		await page.waitForTimeout(300);
		expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
	});
	```

- **运行与更新快照**：
	- 在 `apps/website` 目录运行测试：

		```bash
		cd apps/website
		# 运行测试并比较快照
		npx playwright test "apps/website/app/(docs)/components/button/page.spec.ts"

		# 若需要更新（首次生成或接受变更）：
		npx playwright test "apps/website/app/(docs)/components/button/page.spec.ts" -u
		```

	- 我们也在仓库中提供 `yarn` 脚本别名，例如 `yarn test button` 可运行匹配 `button` 的测试文件（在本次执行中已通过）。

- **容器/远程运行注意事项**：
	- 如果 Playwright 在容器中运行，需要用容器可访问的 URL（示例：`http://10.255.255.254:3000/components/button`），或确保容器能访问宿主的 dev server。
	- 路径中包含括号或空格时，在 shell 中使用单引号或双引号包裹（例如测试文件路径）。

- **查看测试报告**：运行测试后可生成 HTML 报告：

	```bash
	# 在 apps/website
	yarn playwright show-report
	```

- **快照存储**：Playwright 自动管理快照文件（与测试文件相关联的 snapshots 目录）；如需将视觉快照保存在特定目录，也可以改为使用 `page.screenshot({ path })` 将文件写到项目内的 snapshot 目录，但这将由维护者自行管理版本控制。

**示例运行记录**

- 本次演示已在本地执行 `yarn test button`，测试通过且 Playwright 生成/更新了视觉快照；要查看快照或将其加入仓库，请运行上述命令并在需要时提交生成的 snapshot 文件。
