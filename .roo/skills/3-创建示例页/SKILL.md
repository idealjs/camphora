**新组件实践指南（中文）——创建示例页**

**本次示例涉及的文件**
- `apps/website/app/(docs)/components/<component>/page.tsx` —— Next.js 示例页面，展示各类变体。

**可复用步骤（示例页部分）**
4. 在站点中添加示例页（Next.js）
	 - 在 `apps/website/app/(docs)/components/<component>/page.tsx` 下创建示例页面。
	 - 示例组织应将可互斥或正交的变体分开展示：
		 - 颜色组：展示 `<componentPrimary>`, `<componentSecondary>` 等，同一组不改变尺寸类。
		 - 尺寸组：展示 `<componentSm>`, `<componentLg>` 等，同一组不改变颜色类。
	 - 可复用项目内的 `Preview` 组件来包裹演示区域，保持风格一致。

**测试（Playwright 快照）**

- **目的**：为组件示例页添加视觉回归测试，使用 Playwright 的快照匹配器 `toMatchSnapshot()` 自动管理快照文件，无需手动写入输出目录。
- **示例测试（放在示例页同目录）**：

	```ts
	// apps/website/app/(docs)/components/<component>/page.spec.ts
	import { test, expect } from '@playwright/test';

	test('<component> page - snapshot', async ({ page }) => {
		await page.goto('http://localhost:3000/components/<component>', { waitUntil: 'networkidle' });
		await page.waitForTimeout(300);
		expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
	});
	```

- **运行与更新快照**：
	- 在 `apps/website` 目录运行测试：

		```bash
		cd apps/website
		# 运行 Playwright 指定测试文件并比较快照
		npx playwright test "apps/website/app/(docs)/components/<component>/page.spec.ts"

		# 若需要更新（首次生成或接受变更）：
		npx playwright test "apps/website/app/(docs)/components/<component>/page.spec.ts" -u
		```

		- 我们也在仓库中提供 `yarn` 脚本别名，推荐使用以下快捷方式来运行单组件测试：

		```bash
		# 在 apps/website 目录下运行：
		# 运行匹配组件名的测试（例如 <component>）
		yarn test <component>

		# 更新视觉快照（如需接受变更）
		yarn test <component> -u
		```

		该 `yarn test <component>` 命令会使用仓库中的测试脚本别名，按测试文件名或测试描述匹配并运行相关测试，便于快速验证单个组件的视觉回归。

- **容器/远程运行注意事项**：
	- 如果 Playwright 在容器中运行，需要用容器可访问的 URL（示例：`http://10.255.255.254:3000/components/<component>`），或确保容器能访问宿主的 dev server。
	- 路径中包含括号或空格时，在 shell 中使用单引号或双引号包裹（例如测试文件路径）。

- **查看测试报告**：运行测试后可生成 HTML 报告：

	```bash
	# 在 apps/website
	yarn playwright show-report
	```

- **快照存储**：Playwright 自动管理快照文件（与测试文件相关联的 snapshots 目录）；如需将视觉快照保存在特定目录，也可以改为使用 `page.screenshot({ path })` 将文件写到项目内的 snapshot 目录，但这将由维护者自行管理版本控制。

**示例运行记录**

- 本次演示已在本地执行 `yarn test <component>`，测试通过且 Playwright 生成/更新了视觉快照；要查看快照或将其加入仓库，请运行上述命令并在需要时提交生成的 snapshot 文件。

记录时间：2026-01-10
