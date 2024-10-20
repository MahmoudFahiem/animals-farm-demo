import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import createPalette from "@mui/material/styles/createPalette";
import { PropsWithChildren } from "react";

const palette = createPalette({
  primary: {
    main: "#556cd6",
  },
  secondary: {
    main: "#19857b",
  },
  error: {
    main: red.A400,
  },
});

const theme = createTheme({
  palette: palette,
});

function MuiProvider({ children }: Readonly<PropsWithChildren>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MuiProvider;
