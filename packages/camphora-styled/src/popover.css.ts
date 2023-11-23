import { keyframes, style } from "@vanilla-extract/css";

import { clickReaction, clickReactionInput } from "./actions";
import { vars } from "./theme.css";

export const popoverHover = style({});

export const popoverFocus = style({});

export const popover = style({
  position: "relative",
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const popoverOpen = style({});

export const popoverContent = style({
  visibility: "hidden",
  display: "none",
  position: "absolute",
  selectors: {
    [`${clickReaction}:has(${clickReactionInput}:checked) ~ &`]: {
      visibility: "visible",
      display: "unset",
      animation: `${fadeIn} ${vars.animation.popover} ease-in-out`,
    },
    [`${popoverOpen} > &`]: {
      visibility: "visible",
      display: "unset",
      animation: `${fadeIn} ${vars.animation.popover} ease-in-out`,
    },
    [`${popoverHover}:hover > &`]: {
      visibility: "visible",
      display: "unset",
      animation: `${fadeIn} ${vars.animation.popover} ease-in-out`,
    },
    [`${popoverFocus}:focus > &`]: {
      visibility: "visible",
      display: "unset",
      animation: `${fadeIn} ${vars.animation.popover} ease-in-out`,
    },
  },
});

export const popoverLeft = style({
  selectors: {
    [`${popover} > &`]: {
      left: "auto",
      right: "100%",
      top: "0",
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
  },
});

export const popoverBottom = style({
  selectors: {
    [`${popover} > &`]: {
      bottom: "auto",
      top: "100%",
    },
  },
});

export const popoverTop = style({
  selectors: {
    [`${popover} > &`]: {
      bottom: "100%",
      top: "auto",
    },
  },
});

export const popoverEnd = style({
  selectors: {
    [[
      `${popover}:has(> ${popoverLeft}) > &`,
      `${popover}:has(> ${popoverRight}) > &`,
    ].join(",\n")]: {
      top: "auto",
      bottom: "0px",
    },
    [[
      `${popover}:has(> ${popoverBottom}) > &`,
      `${popover}:has(> ${popoverTop}) > &`,
    ].join(",\n")]: {
      right: "0px",
    },
  },
});
