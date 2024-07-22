import { style } from "@vanilla-extract/css";

import { paletteVars, themeVars } from "./themes/defaultTheme.css";

export const card = style({
  borderRadius: themeVars.card.rounded.xs,
  padding: themeVars.card.padding.xs,
  width: themeVars.card.width.xs,
  backgroundColor: themeVars.card.backgroundColor.default,
  "@media": {
    "screen and (min-width: 768px)": {
      borderRadius: themeVars.card.rounded.sm,
      padding: themeVars.card.padding.sm,
      width: themeVars.card.width.sm,
    },
    "screen and (min-width: 1024px)": {
      borderRadius: themeVars.card.rounded.md,
      padding: themeVars.card.padding.md,
      width: themeVars.card.width.md,
    },
    "screen and (min-width: 2048px)": {
      borderRadius: themeVars.card.rounded.lg,
      padding: themeVars.card.padding.lg,
      width: themeVars.card.width.lg,
    },
  },
});

export const cardSeondary = style({
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
      boxShadow: themeVars.card.shadow.xs,
      "@media": {
        "screen and (min-width: 768px)": {
          boxShadow: themeVars.card.shadow.sm,
        },
        "screen and (min-width: 1024px)": {
          boxShadow: themeVars.card.shadow.md,
        },
        "screen and (min-width: 2048px)": {
          boxShadow: themeVars.card.shadow.lg,
        },
      },
    },
  },
});

export const cardXs = style({
  selectors: {
    [`${card}&`]: {
      width: themeVars.card.width.xs,
    },
  },
});

export const cardSm = style({
  selectors: {
    [`${card}&`]: {
      width: themeVars.card.width.sm,
    },
  },
});

export const cardMd = style({
  selectors: {
    [`${card}&`]: {
      width: themeVars.card.width.md,
    },
  },
});
export const cardLg = style({
  selectors: {
    [`${card}&`]: {
      width: themeVars.card.width.lg,
    },
  },
});
