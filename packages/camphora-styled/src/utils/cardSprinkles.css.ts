import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { paletteVars, sizeVars } from "../themeContracts.css";

const cardProperties = defineProperties({
  conditions: {
    default: {},
  },
  properties: {
    background: {
      primary: paletteVars.primary.bg,
      secondary: paletteVars.secondary.bg,
      accent: paletteVars.accent.content,
    },
    color: {
      primary: paletteVars.primary.content,
      secondary: paletteVars.secondary.content,
      accent: paletteVars.accent.content,
    },
    width: {
      xs: sizeVars.card.width.xs,
      sm: sizeVars.card.width.sm,
      md: sizeVars.card.width.md,
      lg: sizeVars.card.width.lg,
    },
    padding: {
      xs: sizeVars.card.padding.xs,
      sm: sizeVars.card.padding.sm,
      md: sizeVars.card.padding.md,
      lg: sizeVars.card.padding.lg,
    },
    borderRadius: {
      xs: sizeVars.card.rounded.xs,
      sm: sizeVars.card.rounded.sm,
      md: sizeVars.card.rounded.md,
      lg: sizeVars.card.rounded.lg,
    },
  },
  defaultCondition: "default",
});

export const cardSprinkles = createSprinkles(cardProperties);
