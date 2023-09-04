# 测试

由于 css 组件库不包含 js 运行时代码，所以不需要做单元测试。只需要在修改后，保证视觉效果相同。所以引入了 playwright 测试框架。

## 保持视觉效果相同的核心思路

每次开发者提交合并请求时，CICD 流水线会自动执行测试步骤，确保 image snapshot 与过去相同。以此达到保持视觉效果相同的目的。

对于 image snapshot 来说，由于开发者的平台不同，无法生成出相同的 image（可能受字体等一些细节问题影响）。所以使用 ci 流水线生成 image snapshot。

开发者需要保证的是，测试代码在后续迭代中，可以达到保证视觉效果的目的。

### 如何编写可以保持视觉效果的测试用例

1. image snapshot 尽可能减少无关内容。如页面路由、侧边栏、等与组件无直接视觉效果的部分。

## 编写测试套

playwright 测试框架会在启动时，复用已经启动的 website。如果未启动则会启动一个 website 用于测试。

简单的测试代码如下

```ts
import { expect, test } from "@playwright/test";

test("button color", async ({ page }) => {
  // 跳转到 website 组件页面。
  await page.goto("/docs/components/Actions/Button");

  // 使用 playwright api 获取 headless 浏览器截图，用于 snapshot 对比。
  expect(await page.screenshot()).toMatchSnapshot();
});
```

## 本地生成 image snapshot，并确认图片内容符合预期。

在项目根目录下执行

```
yarn workspace website playwright test
```

更新快照

```
yarn workspace website playwright test -u
```

## 使用 CI 生成 image snapshot

github ci 会对 `feat/${xxx}` `fix/${xxx}` `test/${xxx}`命名格式的分支（如 test/button、feat/popover）执行 image snapshot 的生成步骤。

## 辅助插件

安装 [playwright vscode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) 

在 vscode 中可视化的点击，运行单独的测试。
