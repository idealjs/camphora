# Badge — Playwright 测试说明

- 测试目标：校验不同颜色变体与尺寸下的视觉一致性与布局。
- 推荐测试用例：
  - 变体快照：对 solid/outline/ghost（或项目中的变体）分别截图。
  - 尺寸快照：small/medium/large 的视觉检查。
  - 与其他组件组合：将 badge 放在按钮/卡片上检查对齐与溢出。
- 建议测试文件：`apps/website/tests/badge.spec.ts`
- 注意：仅使用 Playwright 截图与交互 API。
