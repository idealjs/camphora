import { expect, test } from "@playwright/test";

test("button", async ({ page }) => {
  const url = "http://localhost:3000/components/button";

  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(300); // brief wait for animations/fonts

  // Use Playwright snapshot matcher — no manual out dir required
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
