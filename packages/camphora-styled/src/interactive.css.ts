import { style } from "@vanilla-extract/css";

export const Ia = style({});

export const IaData = style({
  selectors: {
    [`${Ia} &`]: {
      display: "none",
    },
  },
});
