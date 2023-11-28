import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const cardShadow = style({});

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: vars.padding.card,
  width: vars.size.card.small,
  selectors: {
    [`&${cardShadow}`]: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
});
