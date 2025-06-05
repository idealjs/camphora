import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { sizeVars } from "../themeContracts.css";

const cardProperties = defineProperties({
  conditions: {
    default: {},
  },
  properties: {
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
    boxShadow: {
      xs: sizeVars.card.shadow.xs,
      sm: sizeVars.card.shadow.sm,
      md: sizeVars.card.shadow.md,
      lg: sizeVars.card.shadow.lg,
    },
  },
  defaultCondition: "default",
});

export const cardSprinkles = createSprinkles(cardProperties);
