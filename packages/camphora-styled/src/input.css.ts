import { style } from "@vanilla-extract/css";

import { vars } from "./themes";

export const inputActive = style({});
export const inputGhost = style({});

export const inputPrimary = style({});
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
  height: vars.height.input.medium,
  lineHeight: vars.lineHeight.input.medium,
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  border: `1px solid ${vars.colors.neutral.bg}`,
  selectors: {
    ["&:focus-within"]: {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineOffset: "2px",
      outlineColor: vars.colors.neutral.bg,
    },
    [`${inputGhost}&`]: {
      border: "0px",
    },
  },
});

export const input = style({
  boxSizing: "border-box",
  height: vars.height.input.medium,
  lineHeight: vars.lineHeight.input.medium,
  borderRadius: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  border: `1px solid ${vars.colors.neutral.bg}`,
  selectors: {
    ["&:focus"]: {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineOffset: "2px",
      outlineColor: vars.colors.neutral.bg,
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
