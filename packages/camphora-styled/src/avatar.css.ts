import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";
import { sizeTokenVars } from "./tokens/size.css";

export const avatar = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: sizeTokenVars.borderRadius.sm,
  overflow: "hidden",
  backgroundColor: colorTokenVars.neutral[100],
  color: colorTokenVars.neutral[900],
  fontSize: "14px",
  fontWeight: 500,
});

export const avatarImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const avatarSm = style({
  selectors: {
    [`${avatar}&`]: {
      width: "32px",
      height: "32px",
      fontSize: "12px",
    },
  },
});

export const avatarMd = style({
  selectors: {
    [`${avatar}&`]: {
      width: "40px",
      height: "40px",
      fontSize: "14px",
    },
  },
});

export const avatarLg = style({
  selectors: {
    [`${avatar}&`]: {
      width: "48px",
      height: "48px",
      fontSize: "16px",
    },
  },
});

export const avatarCircle = style({
  selectors: {
    [`${avatar}&`]: {
      borderRadius: "50%",
    },
  },
});

export const avatarSquare = style({
  selectors: {
    [`${avatar}&`]: {
      borderRadius: sizeTokenVars.borderRadius.sm,
    },
  },
});

export const avatarFallback = style({
  selectors: {
    [`${avatar}&`]: {
      backgroundColor: colorTokenVars.primary[500],
      color: colorTokenVars.primary[100],
    },
  },
});
