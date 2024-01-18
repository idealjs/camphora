import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const menu = style({
  zIndex: vars.zIndex.menu,
  listStyleType: "none",
  selectors: {
    ["ul&"]: {},
  },
  marginBlockStart: "unset",
  marginBlockEnd: "unset",
});

export const menuVertical = style({
  display: "flex",
});

export const menuItem = style({
  selectors: {
    ["&:hover"]: {
      backgroundColor: vars.colors.secondary.focus,
      borderRadius: vars.rounded.card,
    },
  },
});
