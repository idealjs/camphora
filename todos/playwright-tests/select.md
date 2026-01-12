# Select — Playwright 测试说明

- 测试目标：验证原生或自定义 `Select` 的打开/选择、多选与键盘交互。
- 推荐测试用例：
  - 打开/选择：点击打开下拉并选择项，断言显示值更改。
  - 多选行为：对于多选示例，选择多项并断言结果展示。
  - 键盘导航：使用 Arrow/Enter/Space 导航并选择项。
  - 快照：对常见变体（bordered/ghost/primary）做视觉快照。
- 建议测试文件：`apps/website/tests/select.spec.ts`
- 注意：Playwright 可用于交互与截图验证。
