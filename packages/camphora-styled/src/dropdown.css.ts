import { keyframes, style } from "@vanilla-extract/css";

import { themeVars } from "./themes/defaultTheme.css";

export const dropdown = style({
  position: "relative",
});

export const dropdownEnd = style({});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const dropdownOpen = style({});

export const dropdownContent = style({
  visibility: "hidden",
  position: "absolute",
  selectors: {
    [`${dropdown}:focus-within > &`]: {
      visibility: "visible",
      animation: themeVars.animation.dropdown,
    },
    [`${dropdownOpen} > &`]: {
      visibility: "visible",
      animation: themeVars.animation.dropdown,
    },
    [`${dropdown}${dropdownEnd} > &`]: {
      right: "0px",
    },
  },
});
