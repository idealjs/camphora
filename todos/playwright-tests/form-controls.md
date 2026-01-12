# Form Controls — Playwright 测试说明

- 测试目标：验证输入控件（input、textarea、checkbox、radio、select）的渲染、聚焦、键盘行为与表单提交交互。
- 推荐测试用例：
  - 聚焦样式：Tab 到控件并截图聚焦样式。
  - 输入与提交：填写文本输入并提交（示例页面应记录提交结果），断言提交内容。
  - checkbox/radio：点击与键盘选择，断言状态改变。
  - select：打开下拉、选择项并断言选择值（含多选情形）。
- 建议测试文件：`apps/website/tests/form-controls.spec.ts`
- 注意：用 Playwright 模拟真实用户输入并截图关键状态。
