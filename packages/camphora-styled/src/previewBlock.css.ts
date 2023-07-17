import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const previewBlock = style({
  padding: "16px",
  backgroundSize: "5px 5px",
  backgroundImage: `radial-gradient(${vars.colors.base.content} 0.5px ,${vars.colors.base[200]} 0.5px)`,
});
