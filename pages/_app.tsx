import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageWrapper from "../components/generalComponents/PageWrapper/PageWrapper";

const App = ({ Component, pageProps }: AppProps) => (
    <PageWrapper>
        <Component {...pageProps} />
    </PageWrapper>
);

export default App;
