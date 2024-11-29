import React, { useEffect } from "react";
import NProgress from 'nprogress';
import useRouter from "@/hooks/useRouter";
import common from "../public/locales/en/common.json";
// import api from "js-cookie";

const ErrorBoundary = ({ statusCode, error, api}) => {
    const router = useRouter();

    const tryCatchWrapper = async (asyncFn) => {
        try {
            await asyncFn();
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    const handleRouteChange = () => {
        NProgress.remove();
    };

    const handleErrors = async () => {
        NProgress.done();
        router.events.on('routeChangeComplete', handleRouteChange);

        // TODO: delete filter "NetworkError when attempting to fetch resource.", when we have update to Next.js 14
        const errorMsgsToAvoid = () => {
            const msgArr = [
                "Failed to read the 'localStorage' property from 'Window': Access is denied for this document.",
                "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
                "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.",
                "NetworkError when attempting to fetch resource.",
            ];
            return !msgArr.includes(error?.message);
        };
    };

    useEffect(() => {
        tryCatchWrapper(handleErrors);

        return () => {
            if (router?.events) {
                router?.events?.off('routeChangeComplete', handleRouteChange);
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="error-500-container">
            { statusCode === '404' ?? common.error.tryAgain}
            <style jsx>{`
        .error-500-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        `}</style>
        </div>
    )
};

export default ErrorBoundary;
