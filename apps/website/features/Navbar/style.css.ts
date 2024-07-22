import { dropdown, paletteVars, themeVars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const selectedButtonStyle = style({
  selectors: {
    [`${dropdown}:focus-within &`]: {
      backgroundColor: `color-mix(in srgb, ${paletteVars.base.content} ${themeVars.btn.opacity.ghost}, #fff0)`,
    },
  },
});
