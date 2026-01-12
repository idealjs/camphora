# Avatar — Playwright 测试说明

- 测试目标：验证头像在不同尺寸、形状与图片加载失败时的回退显示。
- 推荐测试用例：
  - 尺寸/形状快照：对 circle/square 与 sm/md/lg 的组合分别做截图。
  - 图片加载失败：使用无效图片 URL，断言显示 fallback（首字母或占位）。
  - accessibility：检查 `alt` 文本是否可见且对屏幕阅读器友好（存在 alt 属性）。
- 建议测试文件：`apps/website/tests/avatar.spec.ts`
- 注意：控制网络资源或本地示例页面以可重复方式触发 load/error。
