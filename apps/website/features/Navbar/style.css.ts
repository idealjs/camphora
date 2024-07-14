import { dropdown, themeVars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const selectedButtonStyle = style({
  selectors: {
    [`${dropdown}:focus-within &`]: {
      backgroundColor: `color-mix(in srgb, ${themeVars.colors.base.content} ${themeVars.opacity.btn}, #fff0)`,
    },
  },
});
