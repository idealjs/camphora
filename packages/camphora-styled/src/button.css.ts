import { createVar, style } from "@vanilla-extract/css";
import {} from "@vanilla-extract/css-utils";

import { vars } from "./theme.css";

export const button = style({
  cursor: "pointer",
});

export const buttonActive = style({});

export const buttonGhost = style({
  selectors: {
    [`&:hover, ${buttonActive}&`]: {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff)`,
    },
  },
});
