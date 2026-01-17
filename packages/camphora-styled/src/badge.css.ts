import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 8px",
  fontSize: "12px",
  lineHeight: 1,
  borderRadius: sizeTokenVars.borderRadius.sm,
  backgroundColor: colorTokenVars.neutral[100],
  color: colorTokenVars.neutral[900],
  flexShrink: 0,
});

export const badgeSolid = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: colorTokenVars.neutral[500],
      color: colorTokenVars.neutral[900],
    },
  },
});

export const badgeOutline = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: "transparent",
      border: `1px solid ${colorTokenVars.neutral[300]}`,
    },
  },
});

export const badgeGhost = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: "transparent",
      color: "currentcolor",
    },
  },
});

// color variants
export const badgePrimary = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: colorTokenVars.primary[500],
      color: colorTokenVars.primary[100],
    },
    [`${badge}&${badgeOutline}`]: {
      borderColor: colorTokenVars.primary[500],
      color: colorTokenVars.primary[500],
      backgroundColor: "transparent",
    },
  },
});

export const badgeSecondary = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: colorTokenVars.secondary[500],
      color: colorTokenVars.secondary[100],
    },
    [`${badge}&${badgeOutline}`]: {
      borderColor: colorTokenVars.secondary[500],
      color: colorTokenVars.secondary[500],
      backgroundColor: "transparent",
    },
  },
});

export const badgeAccent = style({
  selectors: {
    [`${badge}&`]: {
      backgroundColor: colorTokenVars.accent[500],
      color: colorTokenVars.accent[100],
    },
    [`${badge}&${badgeOutline}`]: {
      borderColor: colorTokenVars.accent[500],
      color: colorTokenVars.accent[500],
      backgroundColor: "transparent",
    },
  },
});

// sizes
export const badgeSm = style({
  selectors: {
    [`${badge}&`]: {
      padding: "1px 6px",
      fontSize: "11px",
      borderRadius: sizeTokenVars.borderRadius.xs,
    },
  },
});

export const badgeMd = style({
  selectors: {
    [`${badge}&`]: {
      padding: "4px 10px",
      fontSize: "12px",
      borderRadius: sizeTokenVars.borderRadius.sm,
    },
  },
});

export const badgeLg = style({
  selectors: {
    [`${badge}&`]: {
      padding: "6px 12px",
      fontSize: "14px",
      borderRadius: sizeTokenVars.borderRadius.md,
    },
  },
});
