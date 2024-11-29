import ErrorBoundary from "../components/ErrorBoundary";

export default function Error({ statusCode, error }) {

  return (
      <ErrorBoundary statusCode={statusCode} error={error} api={"none"}/>
  )
}


Error.getInitialProps = (context) => {
  const statusCode = context.res ? context.res.statusCode : 'no status code'
  return { statusCode, error: {message: context.err.message, stack: context.err.stack, referer: document.referrer} }
}
