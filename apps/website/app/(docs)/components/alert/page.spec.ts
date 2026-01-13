import { expect, test } from "@playwright/test";

test("alert page - snapshot", async ({ page }) => {
  await page.goto("http://localhost:3000/components/alert", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(300);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
