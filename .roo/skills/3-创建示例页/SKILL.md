---
name: create-component-nextjs-page
description: "本技能用于在网站文档中为组件创建示例页，说明示例页应包含的要素与组织规范：组件定位、可复制运行的基础示例、常见变体、交互与边界条件、可访问性要点以及测试与视觉回归快照路径。示例采用 MDX/TSX 格式并保证代码可直接复制运行。"
---

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
