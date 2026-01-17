**新组件实践指南（中文）——创建组件**

**本次示例涉及的文件**
- `packages/camphora-react/src/components/<Component>/index.tsx` —— 简洁的 React 包装组件，组合类并透传原生属性。
- `packages/camphora-react/src/components/index.ts` —— 将组件导出，供项目其他地方直接引用。

**可复用步骤（组件部分）**
2. 编写 React 组件
	 - 在 `packages/camphora-react/src/components/<Component>/index.tsx` 中创建组件。
	 - 组件约定：
		 - 默认导出 `<Component>` 函数组件。
		 - 接受 `PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>`，以便透传 `onClick`、`disabled`、`aria-*` 等原生属性。
		 - 组件的 props 应在组件内展开（spread）并透传到原生元素，确保 `aria-*`、`onClick`、`disabled` 等原生属性被保留（例如使用 `{...rest}`）。
		 - 组件的 props 类型应通过接口定义，并使用 `I` 前缀命名，例如 `interface I<Component>Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}`；组件应使用该接口进行类型注解。
		 - 使用 `clsx` 将外部 `className` 与基础 `<component>` 类合并；不引入变体类型的 props（例如 `variant="primary"`）——所有视觉变体通过类名控制。
	 - 示例实现：

		 ```tsx
		 import React from "react";
		 import { button } from "@idealjs/camphora-styled";
		 import clsx from "clsx";

		 interface I<Component>Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

		 const <Component>: React.FC<I<Component>Props> = ({ children, className, ...rest }) => (
			 <button type="button" className={clsx(button, className)} {...rest}>
				 {children}
			 </button>
		 );

		 export default <Component>;
		 ```

3. 导出组件
	 - 在 `packages/camphora-react/src/components/index.ts` 中添加导出项，使其他包可直接通过 `@idealjs/camphora-react` 引入。

**注意与约定**
- 使用 `clsx` 合并类名。
- 组件层尽量减少自定义 props，把视觉与主题相关的变化交给 token 与类名。
- 若组件需要状态（例如打开/关闭），可以使用真实的 DOM 输入或内部状态实现，但仍建议把视觉状态由类名控制。

**组件状态约定**
- 组件应保持无状态（stateless）。若组件需要 UI 状态（例如 `visible` / 打开-关闭），应由外部通过 props 传入并由外部控制（例如传入 `visible` 和 `onClose`），组件内部不应持有 UI 可变状态。

记录时间：2026-01-10
