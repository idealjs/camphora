# 按钮 (Button)

简要计划（遵循 New-Component.md）：样式、组件、示例与测试。

## 样式
- **文件**：packages/camphora-styled/src/button.css.ts
- **Token**：颜色、尺寸、圆角、层级、聚焦环
- **指南**：实现基础 `button` 类及独立变体类（例如 `buttonPrimary`、`buttonGhost`、`buttonSm`）。保持选择器低优先级，并使用 `@vanilla-extract` 的选择器。

## 组件
- **文件**：packages/camphora-react/src/components/Button/index.tsx
- **API**：`PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>`，透传 `className` 与原生属性。
- **实现**：使用 `clsx` 合并类，避免在组件层面处理变体属性——通过传入变体类来控制样式。

## 示例
- **文档页**：apps/website/app/(docs)/components/button/page.tsx
- **分组**：颜色组（primary/secondary/ghost）、尺寸组（sm/md/lg）、禁用/聚焦演示。

## 测试
- **Playwright**：apps/website/app/(docs)/components/button/page.spec.ts
- **示例**：
```ts
import { test, expect } from '@playwright/test';
test('button - snapshot', async ({ page }) => {
  await page.goto('http://localhost:3000/components/button');
  await page.waitForTimeout(200);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
```

## 构建与验证
- **构建样式**：`yarn workspace @idealjs/camphora-styled build`
- **运行站点**：`cd apps/website && yarn dev`
