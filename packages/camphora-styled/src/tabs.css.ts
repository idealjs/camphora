import { createVar, style } from "@vanilla-extract/css";

import { inputData } from "./interactive.css";
import { paletteVars, sizeVars } from "./themeContracts.css";

export const tabs = style({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${sizeVars.tab.width.md}, 1fr))`,
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
      gridColumn: "1/-1",
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

export const tabXs = style({
  selectors: {
    [`${tabs}&`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(${sizeVars.tab.width.xs}, 1fr))`,
    },
  },
});
export const tabSm = style({
  selectors: {
    [`${tabs}&`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(${sizeVars.tab.width.sm}, 1fr))`,
    },
  },
});
export const tabMd = style({
  selectors: {
    [`${tabs}&`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(${sizeVars.tab.width.md}, 1fr))`,
    },
  },
});
export const tabLg = style({
  selectors: {
    [`${tabs}&`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(${sizeVars.tab.width.lg}, 1fr))`,
    },
  },
});
