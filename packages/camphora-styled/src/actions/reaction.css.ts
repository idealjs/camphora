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
  display: "none",
  selectors: {
    [`${clickAction} > ${clickActionInput}:checked ~ &`]: {
      visibility: "visible",
      display: "unset",
    },
  },
});

export const hoverAction = style({});

export const hoverReaction = style({
  visibility: "hidden",
  display: "none",
  [`${hoverAction}:hover > &`]: {
    visibility: "visible",
    display: "unset",
  },
});

export const focusAction = style({});

export const focusReaction = style({
  visibility: "hidden",
  display: "none",
  [`${focusAction}:focus > &`]: {
    visibility: "visible",
    display: "unset",
  },
});
