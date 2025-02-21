// src/Theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#673ab7", // color principal (purple)
        },
        secondary: {
            main: "#f50057", // color secundario (pink)
        },
    },
});

export default theme;
