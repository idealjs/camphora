import { expect, test } from "@playwright/test";
import { configureSnapshot } from "@site/src/testConfig";

test.beforeEach(configureSnapshot);

test("button color", async ({ page }) => {
  await page.goto("/docs/components/Actions/Button");

  // Expect a title "to contain" a substring.
  expect(
    await page.locator(".container.padding-top--md").screenshot()
  ).toMatchSnapshot();
});
