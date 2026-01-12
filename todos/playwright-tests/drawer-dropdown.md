# Drawer / CSS-only Dropdown — Playwright 测试说明

- 测试目标：验证抽屉与仅 CSS 下拉的打开/关闭、遮罩与布局表现。
- 推荐测试用例：
  - 打开/关闭快照：点击或触发打开抽屉，截图打开和关闭状态。
  - 遮罩交互：点击遮罩是否关闭（如实现），断言遮罩存在与层级。
  - CSS-only 限制说明：记录哪些交互在仅 CSS 实现下不可用（焦点陷阱等），并对视觉进行快照。
- 建议测试文件：`apps/website/tests/drawer-dropdown.spec.ts`
- 注意：使用 Playwright 模拟点击并截图；对于仅 CSS 示例，重点做视觉检查并记录限制。
