import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const button: Object = style({
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "48px",
  minHeight: "48px",
  padding: "0px 16px 0px 16px",
  backgroundColor: vars.colors.primary.bg, // Use primary background color
  color: vars.colors.primary.content, // Use primary content color
  borderRadius: vars.rounded.btn, // Apply rounded corners from theme
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
  transition: "background-color 0.2s ease-in-out", // Add transition effect
  ":hover": {
    backgroundColor: vars.colors.primary.focus, // Use primary focus color on hover
  },
  ":active": {
    transform: "scale(0.95)", // Add a slight scaling effect on click
  },
});

export const buttonActive = style({});

export const primaryButton = style({
  ...button,
  backgroundColor: vars.colors.primary.bg,
  color: vars.colors.primary.content,
});

export const infoButton = style({
  ...button,
  backgroundColor: vars.colors.info.bg,
  color: vars.colors.info.content,
});

export const successButton = style({
  ...button,
  backgroundColor: vars.colors.success.bg,
  color: vars.colors.success.content,
});

export const warningButton = style({
  ...button,
  backgroundColor: vars.colors.warning.bg,
  color: vars.colors.warning.content,
});

export const errorButton = style({
  ...button,
  backgroundColor: vars.colors.error.bg,
  color: vars.colors.error.content,
});

export const neutralButton = style({
  ...button,
  backgroundColor: vars.colors.neutral.bg,
  color: vars.colors.neutral.content,
});

export const secondaryButton = style({
  ...button,
  backgroundColor: vars.colors.secondary.bg,
  color: vars.colors.secondary.content,
});

export const accentButton = style({
  ...button,
  backgroundColor: vars.colors.accent.bg,
  color: vars.colors.accent.content,
});

export const buttonGhost = style({
  ...button,
  backgroundColor: "transparent",
  color: "currentcolor",
  selectors: {
    "&:hover": {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff0)`,
    },
  },
});
