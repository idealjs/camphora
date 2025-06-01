import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themeContracts.css";

export const card = style({
  borderRadius: sizeVars.card.rounded.md,
  padding: sizeVars.card.padding.md,
  boxSizing: "border-box",
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

export const cardXs = style({
  selectors: {
    [`${card}&`]: {
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
      width: sizeVars.card.width.md,
    },
  },
});

export const cardLg = style({
  selectors: {
    [`${card}&`]: {
      width: sizeVars.card.width.lg,
    },
  },
});

export const cardShadow = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: sizeVars.card.shadow.md,
    },
    [`${cardXs}&`]: {
      boxShadow: sizeVars.card.shadow.xs,
    },
    [`${cardSm}&`]: {
      boxShadow: sizeVars.card.shadow.sm,
    },
    [`${cardMd}&`]: {
      boxShadow: sizeVars.card.shadow.md,
    },
    [`${cardLg}&`]: {
      boxShadow: sizeVars.card.shadow.lg,
    },
  },
});
