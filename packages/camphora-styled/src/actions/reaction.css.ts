import { style } from "@vanilla-extract/css";

export const clickAction = style({});

export const clickActionInput = style({
  selectors: {
    [`${clickAction} > &`]: {
      display: "none",
    },
  },
});

export const clickReaction = style({
  visibility: "hidden",
  selectors: {
    [`${clickAction} > ${clickActionInput}:checked ~ &`]: {
      visibility: "visible",
    },
  },
});

export const hoverAction = style({});

export const hoverReaction = style({
  visibility: "hidden",
  [`${hoverAction}:hover > &`]: {
    visibility: "visible",
  },
});

export const focusAction = style({});

export const focusReaction = style({
  visibility: "hidden",
  [`${focusAction}:focus > &`]: {
    visibility: "visible",
  },
});
