import { createTheme } from "@vanilla-extract/css";

import { layerTokenVars } from "../tokens/layer.css";

const layerValues = {
  zIndex: {
    lowest: "1",
    low: "10",
    medium: "100",
    high: "1000",
    highest: "10000",
  },
};

export const layerTheme = createTheme(layerTokenVars, layerValues);
