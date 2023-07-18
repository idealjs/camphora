import { style } from "@vanilla-extract/css";

export const tokenField = style({});

export const token = style({
  selectors: {
    [`${tokenField} > &`]: {
      maxWidth: "100%",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
});
