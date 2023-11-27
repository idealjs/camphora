import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

export const buttonActive = style({});

export const buttonPrimary = style({});

export const buttonNeutral = style({});

export const buttonSecondary = style({});

export const buttonAccent = style({});

export const buttonGhost = style({});

export const button = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  borderRadius: vars.rounded.btn, // Apply rounded corners from theme
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
  transition: "background-color 0.2s ease-in-out", // Add transition effect
  border: "none", // remove button default border
  fontSize: "16px",
  selectors: {
    [`&:active, &${buttonActive}`]: {
      transform: "scale(0.95)", // Add a slight scaling effect on click
    },

    // primary
    [`&${buttonPrimary}`]: {
      backgroundColor: vars.colors.primary.bg,
      color: vars.colors.primary.content,
    },
    [`&${buttonPrimary}:hover`]: {
      backgroundColor: vars.colors.primary.focus,
    },

    // neutral
    [`&${buttonNeutral}`]: {
      backgroundColor: vars.colors.neutral.bg,
      color: vars.colors.neutral.content,
    },
    [`&${buttonNeutral}:hover`]: {
      backgroundColor: vars.colors.neutral.focus,
    },

    // secondary
    [`&${buttonSecondary}`]: {
      backgroundColor: vars.colors.secondary.bg,
      color: vars.colors.secondary.content,
    },
    [`&${buttonSecondary}:hover`]: {
      backgroundColor: vars.colors.secondary.focus,
    },

    // accent
    [`&${buttonAccent}`]: {
      backgroundColor: vars.colors.accent.bg,
      color: vars.colors.accent.content,
    },
    [`&${buttonAccent}:hover`]: {
      backgroundColor: vars.colors.accent.focus,
    },

    // ghost
    [`&${buttonGhost}`]: {
      backgroundColor: "transparent",
      color: "currentcolor",
    },
    [`&${buttonGhost}:hover`]: {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff0)`,
    },
  },
});
