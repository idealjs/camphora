# IconButton — Playwright 测试说明

- 测试目标：验证图标按钮的可访问性（aria-label）、点击/键盘触发、不同尺寸与禁用样式。
- 推荐测试用例：
  - aria 检查：确保示例中有 `aria-label` 且与视觉文本一致（若有）。
  - 点击与键盘：click、Enter、Space 操作触发行为并断言结果。
  - 尺寸/禁用快照：不同尺寸和禁用状态的截图。
- 建议测试文件：`apps/website/tests/icon-button.spec.ts`
- 注意：优先测试可访问性和交互，使用 Playwright 断言 DOM 属性与截图。
