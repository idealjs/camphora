import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  borderRadius: sizeTokenVars.borderRadius.sm,
  transition: "background-color 0.2s ease-in-out",
  border: "none",
  fontSize: "16px",
  textDecoration: "none",
  selectors: {
    "&:active": {
      transform: "scale(0.95)",
    },
  },
});

export const buttonActive = style({
  selectors: {
    [`${button}&`]: {
      transform: "scale(0.95)",
    },
  },
});

export const buttonPrimary = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: colorTokenVars.primary[500],
      color: colorTokenVars.primary[900],
    },
    [`${button}&:hover`]: {
      backgroundColor: colorTokenVars.primary[600],
    },
    [`${button}&:active`]: {},
  },
});

export const buttonSecondary = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: colorTokenVars.secondary[500],
      color: colorTokenVars.secondary[900],
    },
    [`${button}&:hover`]: {
      backgroundColor: colorTokenVars.secondary[600],
    },
    [`${button}&:active`]: {},
  },
});

export const buttonNeutral = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: colorTokenVars.neutral[500],
      color: colorTokenVars.neutral[900],
    },
    [`${button}&:hover`]: {
      backgroundColor: colorTokenVars.neutral[600],
    },
    [`${button}&:active`]: {},
  },
});

export const buttonAccent = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: colorTokenVars.accent[500],
      color: colorTokenVars.accent[900],
    },
    [`${button}&:hover`]: {
      backgroundColor: colorTokenVars.accent[600],
    },
    [`${button}&:active`]: {},
  },
});

export const buttonGhost = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: "transparent",
      color: "currentcolor",
    },
    [`${button}&:hover`]: {
      backgroundColor: `color-mix(in srgb, ${colorTokenVars.common[300]} 20%, #fff0)`,
    },
    [`${button}&:active`]: {},
    [`${button}&:focus-within`]: {
      backgroundColor: `color-mix(in srgb, ${colorTokenVars.common[900]} 20%, #fff0)`,
    },
  },
});

export const buttonLink = style({
  selectors: {
    [`${button}&`]: {
      textDecoration: "underline",
    },
    [`${button}&:hover`]: {},
    [`${button}&:active`]: {},
  },
});

export const buttonSm = style({
  selectors: {
    [`${button}&`]: {
      height: "32px",
      minHeight: "32px",
      padding: "0px 12px",
      fontSize: "14px",
      borderRadius: sizeTokenVars.borderRadius.xs,
    },
  },
});

export const buttonLg = style({
  selectors: {
    [`${button}&`]: {
      height: "56px",
      minHeight: "56px",
      padding: "0px 20px",
      fontSize: "18px",
      borderRadius: sizeTokenVars.borderRadius.md,
    },
  },
});
