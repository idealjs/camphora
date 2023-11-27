import { style } from "@vanilla-extract/css";

export const clickReaction = style({});

export const clickReactionInput = style({
  selectors: {
    [`${clickReaction} > &`]: {
      display: "none",
    },
  },
});

export const hoverReaction = style({});

export const focusReaction = style({});

