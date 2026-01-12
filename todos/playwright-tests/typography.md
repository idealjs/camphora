# Typography — Playwright 测试说明

- 测试目标：验证排版刻度（h1-h6、body、caption 等）在不同视口下的渲染一致性。
- 推荐测试用例：
  - 标题/正文快照：渲染示例页并对各级标题与正文做截图。
  - 响应式刻度：在不同屏幕尺寸下截图，验证字体大小与行高的响应式规则。
  - 对比度与可读性：检查深色/浅色主题下的对比情况（截图）。
- 建议测试文件：`apps/website/tests/typography.spec.ts`
- 注意：使用 Playwright 多视口截图验证渲染差异。
