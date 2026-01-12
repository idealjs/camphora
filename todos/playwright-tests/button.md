# Button — Playwright 测试说明

- 测试目标：验证各种变体（primary/secondary/ghost）、尺寸、disabled 与交互行为（点击、键盘激活）。
- 推荐测试用例：
  - 视觉快照：为每个变体与尺寸组合截图。
  - 点击行为：在示例页面上点击按钮并断言相关回调或导航（可以用示例页面记录结果）。
  - 键盘触发：使用 Space/Enter 激活按钮并断言相同行为。
  - disabled 状态：断言不可触发与样式差异。
- 建议测试文件：`apps/website/tests/button.spec.ts`
- 注意：使用 Playwright 的 `page.click`、`page.keyboard` 与截图匹配。
