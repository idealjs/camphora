import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { colorTokenVars } from "../tokens/color.css";

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
      base100: colorTokenVars.common[100],
      base200: colorTokenVars.common[200],
      base300: colorTokenVars.common[300],

      primary: colorTokenVars.primary[500],
      secondary: colorTokenVars.secondary[500],
      accent: colorTokenVars.accent[500],
      neutral: colorTokenVars.neutral[500],
      info: colorTokenVars.info[500],
      success: colorTokenVars.success[500],
      warning: colorTokenVars.warning[500],
      error: colorTokenVars.error[500],

      primaryFocus: colorTokenVars.primary[600],
      secondaryFocus: colorTokenVars.secondary[600],
      accentFocus: colorTokenVars.accent[600],
      neutralFocus: colorTokenVars.neutral[600],

      primaryContent: colorTokenVars.primary[900],
      secondaryContent: colorTokenVars.secondary[900],
      accentContent: colorTokenVars.accent[900],
      neutralContent: colorTokenVars.neutral[900],
      infoContent: colorTokenVars.info[900],
      successContent: colorTokenVars.success[900],
      warningContent: colorTokenVars.warning[900],
      errorContent: colorTokenVars.error[900],
      baseContent: colorTokenVars.common[900],
    },
    color: {
      primary: colorTokenVars.primary[900],
      secondary: colorTokenVars.secondary[900],
      accent: colorTokenVars.accent[900],
      neutral: colorTokenVars.neutral[900],
      info: colorTokenVars.info[900],
      success: colorTokenVars.success[900],
      warning: colorTokenVars.warning[900],
      error: colorTokenVars.error[900],
    },
  },
  shorthands: {
    bg: ["background"],
  },
  defaultCondition: "default",
});

export const colorsSprinkles = createSprinkles(colorsProperties);
