# Dropdown — Playwright 测试说明

- 测试目标：验证下拉面板的打开/关闭、对齐与焦点管理（若实现 JS 增强）。
- 推荐测试用例：
  - 对齐矩阵快照：展示不同对齐（left/center/right/top/bottom）并截图对比。
  - 打开/关闭交互：点击触发并断言面板可见性与聚焦目标。
  - 键盘导航：Arrow/Tab 导航菜单项并断言选中/高亮状态。
- 建议测试文件：`apps/website/tests/dropdown.spec.ts`
- 注意：Playwright 可用于截取对齐差异与测试键盘交互。
