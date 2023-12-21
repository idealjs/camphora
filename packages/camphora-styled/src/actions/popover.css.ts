import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

export const popover = style({
  position: "relative",
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const popoverOpen = style({});

export const popoverContent = style({
  animation: `${fadeIn} ${vars.animation.popover} ease-in-out`,
});

export const popoverEnd = style({});

export const popoverLeft = style({
  selectors: {
    [`${popover} > &`]: {
      left: "auto",
      right: "100%",
      top: "0",
    },
    [`${popover}:has(> ${popoverEnd}) > &`]: {
      top: "auto",
      bottom: "0px",
    },
  },
});

export const popoverRight = style({
  selectors: {
    [`${popover} > &`]: {
      left: "100%",
      right: "auto",
      top: "0",
    },
    [`${popover}:has(> ${popoverEnd}) > &`]: {
      top: "auto",
      bottom: "0px",
    },
  },
});

export const popoverBottom = style({
  selectors: {
    [`${popover} > &`]: {
      bottom: "auto",
      top: "100%",
      left: "0px",
    },
    [`${popover}:has(> ${popoverEnd}) > &`]: {
      right: "0px",
      left: "unset",
    },
  },
});

export const popoverTop = style({
  selectors: {
    [`${popover} > &`]: {
      bottom: "100%",
      top: "auto",
      left: "0px",
    },
    [`${popover}:has(> ${popoverEnd}) > &`]: {
      right: "0px",
      left: "unset",
    },
  },
});
