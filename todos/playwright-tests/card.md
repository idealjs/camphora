# Card — Playwright 测试说明

- 测试目标：验证卡片在不同尺寸、elevation（层级）与内容溢出情形下的视觉表现。
- 推荐测试用例：
  - 画廊快照：small/medium/large 与不同 elevation 的组合截图。
  - 内容溢出与截断：用长文本或图片测试溢出样式。
  - 交互（若有）：如 card 支持可点击或 hover 效果，模拟并截图差异。
- 建议测试文件：`apps/website/tests/card.spec.ts`
- 注意：仅使用 Playwright 截图与交互能力。
