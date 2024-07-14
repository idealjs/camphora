import { style } from "@vanilla-extract/css";

import { themeVars } from "./themes/defaultTheme.css";

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  borderRadius: themeVars.rounded.btn,
  transition: "background-color 0.2s ease-in-out",
  border: "none",
  fontSize: "16px",
  textDecoration: "none",
  selectors: {
    ["&:active"]: {
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
      backgroundColor: themeVars.colors.primary.bg,
      color: themeVars.colors.primary.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: themeVars.colors.primary.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonSecondary = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: themeVars.colors.secondary.bg,
      color: themeVars.colors.secondary.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: themeVars.colors.secondary.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonNeutral = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: themeVars.colors.neutral.bg,
      color: themeVars.colors.neutral.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: themeVars.colors.neutral.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonAccent = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: themeVars.colors.accent.bg,
      color: themeVars.colors.accent.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: themeVars.colors.accent.focus,
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
      backgroundColor: `color-mix(in srgb, ${themeVars.colors.base.content} ${themeVars.opacity.btn}, #fff0)`,
    },
    [`${button}&:active`]: {},
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
