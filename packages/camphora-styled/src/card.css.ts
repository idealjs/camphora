import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const card = style({
  borderRadius: sizeTokenVars.borderRadius.md,
  boxSizing: "border-box",
});

export const cardPrimary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: colorTokenVars.common[100],
    },
  },
});

export const cardSecondary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: colorTokenVars.common[200],
    },
  },
});

export const cardXs = style({
  selectors: {
    [`${card}&`]: {
      borderRadius: sizeTokenVars.borderRadius.xs,
      width: "144px",
    },
  },
});

export const cardSm = style({
  selectors: {
    [`${card}&`]: {
      borderRadius: sizeTokenVars.borderRadius.sm,
      width: "192px",
    },
  },
});

export const cardMd = style({
  selectors: {
    [`${card}&`]: {
      borderRadius: sizeTokenVars.borderRadius.md,
      width: "256px",
    },
  },
});

export const cardLg = style({
  selectors: {
    [`${card}&`]: {
      borderRadius: sizeTokenVars.borderRadius.lg,
      width: "512px",
    },
  },
});

export const cardShadow = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeTokenVars.shadow.md,
    },
    [`${cardXs}&`]: {
      boxShadow: sizeTokenVars.shadow.xs,
    },
    [`${cardSm}&`]: {
      boxShadow: sizeTokenVars.shadow.sm,
    },
    [`${cardMd}&`]: {
      boxShadow: sizeTokenVars.shadow.md,
    },
    [`${cardLg}&`]: {
      boxShadow: sizeTokenVars.shadow.lg,
    },
  },
});
