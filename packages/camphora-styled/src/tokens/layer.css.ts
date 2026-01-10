import { createThemeContract } from "@vanilla-extract/css";

export const layerTokenVars = createThemeContract({
  zIndex: {
    lowest: null,
    low: null,
    medium: null,
    high: null,
    highest: null,
  },
});
