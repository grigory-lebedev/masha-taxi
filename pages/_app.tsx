import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageWrapper from "../shared/general-components/page-wrapper/page-wrapper.component";

const App = ({ Component, pageProps }: AppProps) => (
    <PageWrapper>
        <Component {...pageProps} />
    </PageWrapper>
);

export default App;
