# Alert — Playwright 测试说明

- 测试目标：验证 `Alert` 在不同变体（info/warning/error/success）下的渲染、可关闭交互、无障碍属性与响应式视觉一致性。
- 推荐测试用例：
  - 渲染快照：为每个变体分别截图并比对快照。
  - 关闭交互：对 `dismissible` 状态下的关闭按钮执行点击，断言元素不可见或从 DOM 中移除。
  - 无障碍检查：断言存在 `role=alert`/`aria-live` 等（如适用）。
  - 响应式快照：在 mobile/tablet/desktop 三种视口下截图。
- 建议测试文件：`apps/website/tests/alert.spec.ts`
- 注意：仅使用 Playwright API（截图、定位、键盘/鼠标事件、断言）。
