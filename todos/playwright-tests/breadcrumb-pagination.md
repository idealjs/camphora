# Breadcrumb & Pagination — Playwright 测试说明

- 测试目标：验证面包屑与分页的渲染、键盘导航与响应式表现。
- 推荐测试用例：
  - 渲染快照：面包屑链与分页组件在常见数据量下的截图。
  - 键盘焦点：使用 Tab/Arrow 键在分页或面包屑项间导航，断言聚焦顺序与可见性。
  - 响应式：在多种视口下检查换行/截断行为。
- 建议测试文件：`apps/website/tests/breadcrumb-pagination.spec.ts`
- 注意：使用 Playwright 模拟键盘与截图来验证可访问性与视觉。
