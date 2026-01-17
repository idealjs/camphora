import { expect, test } from "@playwright/test";

test("badge page - snapshot", async ({ page }) => {
  await page.goto("http://localhost:3000/components/badge", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(300);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
