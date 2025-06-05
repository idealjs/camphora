import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { paletteVars } from "../themeContracts.css";

const colorsProperties = defineProperties({
  conditions: {
    focus: {
      selector: "&:focus",
    },
    hover: {
      selector: "&:hover",
    },
    default: {},
  },
  properties: {
    background: {
      base100: paletteVars.base[100],
      base200: paletteVars.base[200],
      base300: paletteVars.base[300],

      primary: paletteVars.primary.bg,
      secondary: paletteVars.secondary.bg,
      accent: paletteVars.accent.bg,
      neutral: paletteVars.neutral.bg,
      info: paletteVars.info.bg,
      success: paletteVars.success.bg,
      warning: paletteVars.warning.bg,
      error: paletteVars.error.bg,

      primaryFocus: paletteVars.primary.focus,
      secondaryFocus: paletteVars.secondary.focus,
      accentFocus: paletteVars.accent.focus,
      neutralFocus: paletteVars.neutral.focus,

      primaryContent: paletteVars.primary.content,
      secondaryContent: paletteVars.secondary.content,
      accentContent: paletteVars.accent.content,
      neutralContent: paletteVars.neutral.content,
      infoContent: paletteVars.info.content,
      successContent: paletteVars.success.content,
      warningContent: paletteVars.warning.content,
      errorContent: paletteVars.error.content,
      baseContent: paletteVars.base.content,
    },
    color: {
      primary: paletteVars.primary.content,
      secondary: paletteVars.secondary.content,
      accent: paletteVars.accent.content,
      neutral: paletteVars.neutral.content,
      info: paletteVars.info.content,
      success: paletteVars.success.content,
      warning: paletteVars.warning.content,
      error: paletteVars.error.content,
    },
  },
  shorthands: {
    bg: ["background"],
  },
  defaultCondition: "default",
});

export const colorsSprinkles = createSprinkles(colorsProperties);
