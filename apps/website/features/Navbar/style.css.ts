import { dropdown, vars } from "@idealjs/camphora-styled";
import { style } from "@vanilla-extract/css";

export const selectedButtonStyle = style({
  selectors: {
    [`${dropdown}:focus-within &`]: {
      backgroundColor: `color-mix(in srgb, ${vars.colors.base.content} ${vars.opacity.btn}, #fff0)`,
    },
  },
});
