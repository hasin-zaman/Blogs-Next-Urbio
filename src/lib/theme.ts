import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#99bc85",
    },
    background: {
      default: "#faf1e6",
      paper: "#fdfaf6",
    },
    secondary: {
      main: "#e4efe7",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;