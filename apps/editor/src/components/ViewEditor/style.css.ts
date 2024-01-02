import { style } from "@vanilla-extract/css";

export const hover = style({
  selectors: {
    ["&:hover"]: {
      border: "solid",
    },
  },
});
