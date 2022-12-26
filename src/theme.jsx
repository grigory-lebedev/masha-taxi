import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#C4A267",
        },
        secondary: {
            main: "#494357",
        },
        error: {
            main: "#CE6A5D",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                },
            },
        },
    },
});

export default theme;
