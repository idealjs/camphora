import { style } from "@vanilla-extract/css";

import { paletteVars } from "./themeContracts.css";

export const preview = style({
  padding: "16px",
  backgroundSize: "5px 5px",
  backgroundImage: `radial-gradient(${paletteVars.base.content} 0.5px ,${paletteVars.base[200]} 0.5px)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
