import { expect, test } from "@playwright/test";

test("home", async ({ page }) => {
  await page.goto("/");

  expect(await page.screenshot()).toMatchSnapshot();
});
