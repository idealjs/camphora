import { style } from "@vanilla-extract/css";

export const tooltipTop = style({});

export const tooltipRight = style({});

export const tooltipLeft = style({});

export const tooltipBottom = style({});

export const tooltip = style({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  selectors: {
    "&:before": {
      content: "attr(data-tip)",
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.2s, visibility 0.2s",
      zIndex: 1,
    },
    "&:hover::before": {
      opacity: 1,
      visibility: "visible",
    },
    [`&${tooltipTop}:before`]: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "6px",
      borderWidth: "6px 6px 0",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.8) transparent transparent",
    },
    [`&${tooltipRight}:before`]: {
      top: "50%",
      left: "100%",
      transform: "translateY(-50%)",
      marginLeft: "6px",
      borderWidth: "6px 0 6px 6px",
      borderStyle: "solid",
      borderColor: "transparent transparent transparent rgba(0, 0, 0, 0.8)",
    },
    [`&${tooltipLeft}:before`]: {
      top: "50%",
      right: "100%",
      transform: "translateY(-50%)",
      marginRight: "6px",
      borderWidth: "6px 0 6px 6px",
      borderStyle: "solid",
      borderColor: "transparent transparent transparent rgba(0, 0, 0, 0.8)",
    },
    [`&${tooltipBottom}:before`]: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "6px",
      borderWidth: "6px 6px 0",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.8) transparent transparent",
    },
  },
});
