import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

export const coverImgContainer = style({
  width: "100%",
  height: "400px",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

export const coverImgContainerEmpty = style({
  backgroundColor: "#111",
});

export const coverImg = style({
  zIndex: 1,
  height: "350px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
  borderRadius: "10px",
});

export const coverPlaceholder = style({
  zIndex: 1,
  width: "240px",
  height: "350px",
  borderRadius: "10px",
  backgroundColor: "#333",
  color: "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const infoContainer = style({
  padding: "30px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
});

export const title = style({
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const tagline = style({
  fontSize: "20px",
  color: "#555",
  marginBottom: "20px",
});

export const overview = style({
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
});