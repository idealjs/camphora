# Stack / Layout — Playwright 测试说明

- 测试目标：验证布局原语（Stack）在不同方向与间距下的渲染与响应式行为。
- 推荐测试用例：
  - 方向与间距快照：vertical/horizontal 与不同 gap 值的截图。
  - 响应式：在不同视口下检查换行/对齐变化。
- 建议测试文件：`apps/website/tests/stack.spec.ts`
- 注意：Playwright 用于截图与视口模拟。
