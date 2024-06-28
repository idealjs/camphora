import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "./themes/contract.css";

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
      animation: `${fadeIn} ${vars.animation.dropdown} ease-in-out`,
    },
    [`${dropdownOpen} > &`]: {
      visibility: "visible",
      animation: `${fadeIn} ${vars.animation.dropdown} ease-in-out`,
    },
    [`${dropdown}${dropdownEnd} > &`]: {
      right: "0px",
    },
  },
});
