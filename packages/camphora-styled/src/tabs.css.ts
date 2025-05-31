import { style } from "@vanilla-extract/css";

import { inputData } from "./interactive.css";
import { paletteVars } from "./themes";

export const tabs = style({
  display: "grid",
});

export const tabPrimary = style({
  selectors: {
    [`${tabs} &`]: {
      backgroundColor: paletteVars.primary.bg,
      color: paletteVars.primary.content,
    },
    [`${tabs} &:has(${inputData}:checked)`]: {
      backgroundColor: paletteVars.primary.focus,
    },
  },
});

export const tab = style({
  selectors: {
    [`${tabs} &`]: {
      gridRowStart: 1,
    },
  },
});

export const tabPanel = style({
  selectors: {
    [`${tabs} &`]: {
      gridColumnStart: 1,
      gridRowStart: 2,
      gridColumnEnd: "span 9999",
      display: "none",
    },
    [`${tab}:has(${inputData}:checked)+&`]: {
      display: "block",
    },
  },
});
