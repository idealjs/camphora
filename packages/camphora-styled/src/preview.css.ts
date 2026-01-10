import { style } from "@vanilla-extract/css";

import { colorTokenVars } from "./tokens/color.css";

export const preview = style({
  padding: "16px",
  backgroundSize: "5px 5px",
  backgroundImage: `radial-gradient(${colorTokenVars.common[900]} 0.5px ,${colorTokenVars.common[200]} 0.5px)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
