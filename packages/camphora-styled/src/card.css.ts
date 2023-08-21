import { style } from "@vanilla-extract/css";

export const card = style({
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  position: "relative",
  selectors: {
    "&:hover": {
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    },
  },
});

export const cardTitle = style({
  selectors: {
    [`${card} > &`]: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
    },
  },
});

export const cardContent = style({
  selectors: {
    [`${card} > &`]: {
      marginBottom: "16px",
      textAlign: "center",
    },
  },
});

export const cardImage = style({
  selectors: {
    [`${card} > &`]: {
      width: "100%",
      maxHeight: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "16px",
    },
  },
});
