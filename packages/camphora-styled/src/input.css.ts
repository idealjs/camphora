import { style } from "@vanilla-extract/css";

import { paletteVars, sizeVars } from "./themes";

export const inputActive = style({});
export const inputGhost = style({});

export const inputSecondary = style({});

export const inputInfo = style({});
export const inputSuccess = style({});
export const inputWarning = style({});
export const inputError = style({});

export const inputXs = style({});
export const inputSm = style({});
export const inputMd = style({});
export const inputLg = style({});

export const inputContainer = style({
  margin: "4px",
  height: sizeVars.input.height.md,
  lineHeight: sizeVars.input.lineHeight.md,
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  selectors: {
    ["&:focus-within"]: {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineOffset: "2px",
    },
    [`${inputGhost}&`]: {
      border: "0px",
    },
  },
});

export const inputContainerPrimary = style({
  selectors: {
    [`${inputContainer}&`]: {
      border: `1px solid ${paletteVars.neutral.bg}`,
    },
    [`${inputContainer}&:focus-within`]: {
      outlineColor: paletteVars.neutral.bg,
    },
  },
});

export const input = style({
  width: "100%",
  boxSizing: "border-box",
  height: sizeVars.input.height.md,
  lineHeight: sizeVars.input.lineHeight.md,
  borderRadius: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  selectors: {
    ["&:focus"]: {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineOffset: "2px",
    },
    [`${inputContainer} &:focus`]: {
      outlineWidth: "0px",
    },
    [`${inputContainer} &`]: {
      borderWidth: "0px",
      flex: 1,
      paddingRight: "0px",
      paddingLeft: "0px",
      border: "0px",
    },
  },
});

export const inputGroup = style({});

export const inputPrimary = style({
  selectors: {
    [`${input}&`]: {
      border: `1px solid ${paletteVars.neutral.bg}`,
    },
    [`${input}&:focus`]: {
      outlineColor: paletteVars.neutral.bg,
    },
  },
});
