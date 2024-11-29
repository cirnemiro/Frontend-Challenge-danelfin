import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next';
import 'nprogress/nprogress.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default appWithTranslation(MyApp)



