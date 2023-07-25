import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  backgroundColor: vars.colors.neutral.bg,
  color: vars.colors.neutral.content,
});

export const buttonActive = style({});

export const buttonGhost = style({
  backgroundColor: "transparent",
  color: "currentcolor",
  selectors: {
    [`&:hover, ${buttonActive}&`]: {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff0)`,
    },
  },
});
