import { style } from "@vanilla-extract/css";

import { themeVars } from "./themes";

export const preview = style({
  padding: "16px",
  backgroundSize: "5px 5px",
  backgroundImage: `radial-gradient(${themeVars.colors.base.content} 0.5px ,${themeVars.colors.base[200]} 0.5px)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
