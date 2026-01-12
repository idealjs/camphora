# Tooltip — Playwright 测试说明

- 测试目标：验证提示气泡在悬停/聚焦时的位置、箭头与文本显示正确。
- 推荐测试用例：
  - 悬停显示：对触发元素 hover，并截图提示位置（top/right/bottom/left）。
  - 聚焦显示：使用键盘聚焦触发并断言可见性。
  - 边界处理：在靠近视口边缘的位置触发，验证自动翻转或位置调整。
- 建议测试文件：`apps/website/tests/tooltip.spec.ts`
- 注意：Playwright 的 `hover`、`focus` 与截图 API 足够覆盖这些场景。
