import { inputData } from "@idealjs/camphora-styled";
import { paletteVars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const tabs = style({
  display: "grid",
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
      gridRowStart: 0,
      gridColumnEnd: "span 999",
      display: "none",
    },
    [`${tab}:has(${inputData}:checked)+&`]: {
      display: "block",
    },
  },
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
