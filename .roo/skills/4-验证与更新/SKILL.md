---
name: create-component-playwright-snapshot
description: "验证与更新：定义组件或功能的验证流程与更新指南，包括测试策略、回归检测、变更日志维护、验证准则和更新发布步骤，确保修改可追溯、可回滚且满足可访问性与兼容性要求。"
---

**新组件实践指南（中文）——验证与更新**

**可复用步骤（验证与更新部分）**
5. 构建与验证
	 - 如需本地查看，先构建样式包并启动站点：

		 ```bash
		 yarn workspace @idealjs/camphora-styled build
		 cd apps/website
		 yarn dev
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

7. 发布流程
	 - 按 monorepo 的发布流程打包并发布（先 build typings 与包，再发布）。

**可复用的提示词模板（新增组件时使用）**

1. 创建名为 `<ComponentName>` 的新组件。
2. 在 `packages/camphora-styled/src/<component>.css.ts` 中，基于现有 token（或新增 token）实现基础样式与变体类。
3. 将颜色 / 尺寸 / 状态等变体作为独立类实现，并与基础类组合使用（不要在组件 props 中引入过多变体控制）。
4. 在 `packages/camphora-react/src/components/<ComponentName>/index.tsx` 中实现一个简洁的 React 包装组件，仅接受 `className` 与原生 HTML 属性。
5. 将组件导出到 `packages/camphora-react/src/components/index.ts`。
6. 在 `apps/website/app/(docs)/components/<component>/page.tsx` 添加示例页，分别展示正交变体（如"仅颜色"、"仅尺寸"）。
7. 构建样式包并运行站点以验证视觉与无障碍。
8. 更新文档，记录新增的 token 或设计决策。

记录时间：2026-01-10
