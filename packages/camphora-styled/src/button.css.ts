import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themes/defaultTheme.css";

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  borderRadius: sizeVars.btn.rounded.md,
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
      backgroundColor: paletteVars.primary.bg,
      color: paletteVars.primary.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: paletteVars.primary.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonSecondary = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: paletteVars.secondary.bg,
      color: paletteVars.secondary.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: paletteVars.secondary.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonNeutral = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: paletteVars.neutral.bg,
      color: paletteVars.neutral.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: paletteVars.neutral.focus,
    },
    [`${button}&:active`]: {},
  },
});

export const buttonAccent = style({
  selectors: {
    [`${button}&`]: {
      backgroundColor: paletteVars.accent.bg,
      color: paletteVars.accent.content,
    },
    [`${button}&:hover`]: {
      backgroundColor: paletteVars.accent.focus,
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
      backgroundColor: `color-mix(in srgb, ${paletteVars.base[300]} 20%, #fff0)`,
    },
    [`${button}&:active`]: {},
    [`${button}&:focus-within`]: {
      backgroundColor: `color-mix(in srgb, ${paletteVars.base.content} 20%, #fff0)`,
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
