import { style } from "@vanilla-extract/css";

import { paletteVars } from "./themeContracts.css";

export const paperShadow = style({});

export const paper = style({
  backgroundColor: "#ffffff",
  selectors: {
    [`&${paperShadow}`]: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const paperPrimary = style({
  selectors: {
    [`${paper}&`]: {
      backgroundColor: paletteVars.base[100],
    },
  },
});

export const paperSecondary = style({
  selectors: {
    [`${paper}&`]: {
      backgroundColor: paletteVars.base[200],
    },
  },
});
