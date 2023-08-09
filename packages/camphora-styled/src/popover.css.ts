import { style } from "@vanilla-extract/css";

import { clickReaction, clickReactionInput } from "./actions";

export const popoverHover = style({})

export const popover = style({
  position: "relative",
});

export const popoverContent = style({
  visibility: "hidden",
  position: "absolute",
  selectors: {
    [`${clickReaction}:has(${clickReactionInput}:checked) ~ &`]: {
      visibility: "visible",
    },
    [`${popoverHover}:hover &`]: {
      visibility: "visible",
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
