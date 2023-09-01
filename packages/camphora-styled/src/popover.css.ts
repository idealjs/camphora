import { keyframes, style } from "@vanilla-extract/css";

import { clickReaction, clickReactionInput } from "./actions";

export const popoverHover = style({})

export const popover = style({
  position: "relative",
});

// 添加弹出动画的关键帧
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const popoverContent = style({
  visibility: "hidden",
  position: "absolute",
  width: "max-content",
  maxWidth: 300,
  selectors: {
    [`${clickReaction}:has(${clickReactionInput}:checked) ~ &`]: {
      visibility: "visible",
      animation: `${fadeIn} 0.3s ease-in-out`, // 添加弹出动画
    },
    [`${popoverHover}:hover &`]: {
      visibility: "visible",
      animation: `${fadeIn} 0.3s ease-in-out`, // 添加弹出动画
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
