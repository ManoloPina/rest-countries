import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556370",
      dark: "#2b3945",
      light: "#82909e",
    },
    secondary: {
      main: "#fafafa",
      dark: "#c7c7c7",
      light: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Nunito Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
