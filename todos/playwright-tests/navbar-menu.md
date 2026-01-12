# Navbar & Menu — Playwright 测试说明

- 测试目标：验证响应式导航栏、菜单下拉与键盘导航行为。
- 推荐测试用例：
  - 响应式快照：在不同视口下比较导航布局（collapsed/expanded）。
  - 菜单交互：打开下拉菜单、使用箭头/Enter 导航并断言选中项。
  - 无障碍：检查菜单项是否具备适当的 role 和 aria 属性（如 `aria-expanded`）。
- 建议测试文件：`apps/website/tests/navbar-menu.spec.ts`
- 注意：Playwright 可模拟视口、键盘与截图。
