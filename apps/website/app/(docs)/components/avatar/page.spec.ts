// apps/website/app/(docs)/components/avatar/page.spec.ts
import { expect, test } from "@playwright/test";

test("avatar page - snapshot", async ({ page }) => {
  await page.goto("http://localhost:3000/components/avatar", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(300);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
