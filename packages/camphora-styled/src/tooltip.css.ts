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
    "&:after": {
      content: "\"\"",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.2s, visibility 0.2s",
    },
    "&:hover::before": {
      opacity: 1,
      visibility: "visible",
    },
    "&:hover::after": {
      opacity: 1,
      visibility: "visible",
    },

    // tooltipTop
    [`&${tooltipTop}:before`]: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "6px",
    },
    [`&${tooltipTop}:after`]: {
      position: "absolute",
      top: "-13%",
      left: "50%",
      transform: "translateX(-50%)",
      borderTop: "6px solid rgba(0, 0, 0, 0.8)",
      borderRight: "6px solid transparent",
      borderLeft: "6px solid transparent",
    },

    // tooltipBottom
    [`&${tooltipBottom}:before`]: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "6px",
    },
    [`&${tooltipBottom}:after`]: {
      position: "absolute",
      bottom: "-12%",
      left: "50%",
      transform: "translateX(-50%)",
      borderBottom: "6px solid rgba(0, 0, 0, 0.8)",
      borderRight: "6px solid transparent",
      borderLeft: "6px solid transparent",
    },
    
    // tooltipLeft
    [`&${tooltipLeft}:before`]: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: "6px",
    },
    [`&${tooltipLeft}:after`]: {
      position: "absolute",
      left: "-5.5%",
      top: "50%",
      transform: "translateY(-50%)",
      borderLeft: "6px solid rgba(0, 0, 0, 0.8)",
      borderTop: "6px solid transparent",
      borderBottom: "6px solid transparent",
    },
    
    // tooltipRight
    [`&${tooltipRight}:before`]: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: "6px",
    },
    [`&${tooltipRight}:after`]: {
      position: "absolute",
      right: "-5.5%",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "6px solid rgba(0, 0, 0, 0.8)",
      borderTop: "6px solid transparent",
      borderBottom: "6px solid transparent",
    },
  },
});
