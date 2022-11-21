import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#845EC2",
      dark: "#4B4453",
      light: "#B39CD0",
    },
    secondary: {
      main: "#00C9A7",
      dark: "#008B74",
      light: "#C4FCEF",
    },
    text: {
      main:"#fff",
      light: "#F4F7FF",
      dark: "#4B4453",
    },
    background: {
      white: "#FFFFFF",
      dark: "#4B4453",

    },
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(9, 30, 66, 0.2)",
    "0px 1px 3px rgba(9, 30, 66, 0.12)",
    "0px 2px 4px rgba(9, 30, 66, 0.08)",
    "0px 1px 2px rgba(9, 30, 66, 0.2)",
    "0px 1px 3px rgba(9, 30, 66, 0.12)",
    "0px 2px 4px rgba(9, 30, 66, 0.08)",
    "0px 1px 2px rgba(9, 30, 66, 0.2)",
    "0px 1px 3px rgba(9, 30, 66, 0.12)",
    "0px 2px 4px rgba(9, 30, 66, 0.08)",
  ],
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "NunitoSans-Regular, sans-serif",
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
});
