import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { sizeTokenVars } from "../tokens/size.css";

const cardProperties = defineProperties({
  conditions: {
    default: {},
  },
  properties: {
    width: {
      xs: "144px",
      sm: "192px",
      md: "256px",
      lg: "512px",
    },
    padding: {
      xs: sizeTokenVars.padding.md,
      sm: "20px",
      md: sizeTokenVars.padding.lg,
      lg: "28px",
    },
    borderRadius: {
      xs: sizeTokenVars.borderRadius.sm,
      sm: "12px",
      md: sizeTokenVars.borderRadius.md,
      lg: sizeTokenVars.borderRadius.lg,
    },
    boxShadow: {
      xs: sizeTokenVars.shadow.xs,
      sm: sizeTokenVars.shadow.sm,
      md: sizeTokenVars.shadow.md,
      lg: sizeTokenVars.shadow.lg,
    },
  },
  defaultCondition: "default",
});

export const cardSprinkles = createSprinkles(cardProperties);
