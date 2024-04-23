import { expect, test } from "@playwright/test";

test("button color", async ({ page }) => {
  await page.goto("/components/button");

  expect(await page.locator("#button").screenshot()).toMatchSnapshot();
});
