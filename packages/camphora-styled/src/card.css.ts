import { style } from "@vanilla-extract/css";

import { vars } from "./themes/contract.css";

export const cardShadow = style({});

export const cardXs = style({});
export const cardSm = style({});
export const cardMd = style({});
export const cardLg = style({});

export const cardSeondary = style({});

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: vars.padding.card,
  selectors: {
    [`&${cardShadow}`]: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    [`&${cardXs}`]: {
      width: vars.width.card["extra-small"],
    },
    [`&${cardSm}`]: {
      width: vars.width.card.small,
    },
    [`&${cardMd}`]: {
      width: vars.width.card.medium,
    },
    [`&${cardLg}`]: {
      width: vars.width.card.large,
    },
    [`&${cardSeondary}`]: {
      backgroundColor: vars.colors.base[200],
    },
  },
});
