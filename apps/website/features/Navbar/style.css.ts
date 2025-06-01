import { dropdown } from "@idealjs/camphora-styled";
import { paletteVars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const selectedButtonStyle = style({
  selectors: {
    [`${dropdown}:focus-within &`]: {
      backgroundColor: `color-mix(in srgb, ${paletteVars.base.content} 20%, #fff0)`,
    },
  },
});
