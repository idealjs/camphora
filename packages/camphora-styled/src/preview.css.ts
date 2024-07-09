import { style } from "@vanilla-extract/css";

import { vars } from "./themes";

export const preview = style({
  padding: "16px",
  backgroundSize: "5px 5px",
  backgroundImage: `radial-gradient(${vars.colors.base.content} 0.5px ,${vars.colors.base[200]} 0.5px)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});