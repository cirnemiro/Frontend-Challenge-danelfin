import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import "nprogress/nprogress.css";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactQueryProvider from "@/context/ReactQueryProvider";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <ReactQueryProvider>
        <Component {...pageProps} />
      </ReactQueryProvider>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
