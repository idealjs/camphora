import { style } from "@vanilla-extract/css";

import { vars } from "./themes";

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
      backgroundColor: vars.colors.base[100],
    },
  },
});

export const paperSecondary = style({
  selectors: {
    [`${paper}&`]: {
      backgroundColor: vars.colors.base[200],
    },
  },
});
