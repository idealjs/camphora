import { style } from "@vanilla-extract/css";

import { inputData } from "./interactive.css";
import { paletteVars } from "./themeContracts.css";

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
      gridColumnEnd: "span 999",
      display: "none",
    },
    [`${tab}:has(${inputData}:checked)+&`]: {
      display: "block",
    },
  },
});

export const tabSlider = style({
  gridRowStart: 2,
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  selectors: {
    [`${tabs}:has(${tab}:nth-of-type(1) ${inputData}:checked) &`]: {
      transform: "translateX(0%)",
    },
    [`${tabs}:has(${tab}:nth-of-type(2) ${inputData}:checked) &`]: {
      transform: "translateX(100%)",
    },
    [`${tabs}:has(${tab}:nth-of-type(3) ${inputData}:checked) &`]: {
      transform: "translateX(200%)",
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
