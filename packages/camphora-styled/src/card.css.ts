import { style } from "@vanilla-extract/css";

import { paletteVars, themeVars } from "./themes/defaultTheme.css";

export const card = style({
  borderRadius: themeVars.card.rounded.md,
  padding: themeVars.card.padding.md,
  width: themeVars.card.width.md,
  backgroundColor: themeVars.card.backgroundColor.default,
});

export const cardSecondary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: paletteVars.base[200],
    },
  },
});

export const cardPrimary = style({
  selectors: {
    [`${card}&`]: {
      backgroundColor: paletteVars.base[100],
    },
  },
});

export const cardShadow = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: themeVars.card.shadow.md,
    },
  },
});

export const cardXs = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: themeVars.card.shadow.xs,
      width: themeVars.card.width.xs,
    },
  },
});

export const cardSm = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: themeVars.card.shadow.sm,
      width: themeVars.card.width.sm,
    },
  },
});

export const cardMd = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: themeVars.card.shadow.md,
      width: themeVars.card.width.md,
    },
  },
});

export const cardLg = style({
  selectors: {
    [`${card}&`]: {
      boxShadow: themeVars.card.shadow.lg,
      width: themeVars.card.width.lg,
    },
  },
});
