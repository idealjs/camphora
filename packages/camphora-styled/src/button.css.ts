import { style } from "@vanilla-extract/css";

import { vars } from "./themes/contract.css";

export const buttonActive = style({});

export const buttonPrimary = style({});

export const buttonSecondary = style({});

export const buttonNeutral = style({});

export const buttonAccent = style({});

export const buttonGhost = style({});

export const buttonLink = style({});

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  borderRadius: vars.rounded.btn,
  transition: "background-color 0.2s ease-in-out",
  border: "none",
  fontSize: "16px",
  textDecoration: "none",
  selectors: {
    [`&:active, &${buttonActive}`]: {
      transform: "scale(0.95)",
    },

    [`&${buttonPrimary}`]: {
      backgroundColor: vars.colors.primary.bg,
      color: vars.colors.primary.content,
    },
    [`&${buttonPrimary}:hover`]: {
      backgroundColor: vars.colors.primary.focus,
    },

    [`&${buttonNeutral}`]: {
      backgroundColor: vars.colors.neutral.bg,
      color: vars.colors.neutral.content,
    },
    [`&${buttonNeutral}:hover`]: {
      backgroundColor: vars.colors.neutral.focus,
    },

    [`&${buttonSecondary}`]: {
      backgroundColor: vars.colors.secondary.bg,
      color: vars.colors.secondary.content,
    },
    [`&${buttonSecondary}:hover`]: {
      backgroundColor: vars.colors.secondary.focus,
    },

    [`&${buttonAccent}`]: {
      backgroundColor: vars.colors.accent.bg,
      color: vars.colors.accent.content,
    },
    [`&${buttonAccent}:hover`]: {
      backgroundColor: vars.colors.accent.focus,
    },

    [`&${buttonGhost}`]: {
      backgroundColor: "transparent",
      color: "currentcolor",
    },
    [`&${buttonGhost}:hover`]: {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff0)`,
    },
    [`&${buttonLink}`]: {
      textDecoration: "underline",
    },
    [`&${buttonLink}:hover`]: {},
  },
});
