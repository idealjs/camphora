import { defaultTheme } from "@idealjs/camphora-styled";
import { expect as playwrightExpect } from "@playwright/test";
import { render } from "@testing-library/react";
import { page } from "@vitest/browser/context";
import { describe, expect, it } from "vitest";

import LanguageDropdown from "./LanguageDropdown";

const Test = () => {
  return <div>abc</div>;
};

describe("unit test", () => {
  it("LanguageDropdown", async () => {
    render(<Test />, {
      container: document.body,
      wrapper: ({ children }) => {
        return (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </div>
        );
      },
    });
    // await page.screenshot()
    // expect(await page.screenshot()).toMatchSnapshot();
    // expect(page).toMatchSnapshot();
  });
});
