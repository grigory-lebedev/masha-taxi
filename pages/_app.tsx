import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";

import PageWrapper from "../shared/components/generalComponents/PageWrapper/PageWrapper";
import theme from "../src/theme";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <PageWrapper>
            <Component {...pageProps} />
        </PageWrapper>
    </ThemeProvider>
);

export default App;
