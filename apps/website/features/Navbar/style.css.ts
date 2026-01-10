import { dropdown } from "@idealjs/camphora-styled";
import { colorTokenVars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const selectedButtonStyle = style({
  selectors: {
    [`${dropdown}:focus-within &`]: {
      backgroundColor: `color-mix(in srgb, ${colorTokenVars.common[900]} 20%, #fff0)`,
    },
  },
});
