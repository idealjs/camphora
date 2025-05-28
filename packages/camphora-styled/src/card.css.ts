import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themes/defaultTheme.css";

export const card = style({
  borderRadius: sizeVars.card.rounded.md,
  padding: sizeVars.card.padding.md,
  width: sizeVars.card.width.md,
});

export const cardPrimary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: paletteVars.base[100],
    },
  },
});

export const cardSecondary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: paletteVars.base[200],
    },
  },
});

export const cardShadow = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.md,
    },
  },
});

export const cardXs = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.xs,
      width: sizeVars.card.width.xs,
    },
  },
});

export const cardSm = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.sm,
      width: sizeVars.card.width.sm,
    },
  },
});

export const cardMd = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.md,
      width: sizeVars.card.width.md,
    },
  },
});

export const cardLg = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.lg,
      width: sizeVars.card.width.lg,
    },
  },
});
