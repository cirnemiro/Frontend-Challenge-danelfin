import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import MetaTagsComponent from '../components/MetaTagsComponent/MetaTagsComponent';
import ErrorBoundary from "../components/ErrorBoundary";

const Custom500 = (props) => {
  const { t } = useTranslation('common');

  return (
      <>
      <MetaTagsComponent title={t('error.seo.title500', {errorCode: '500'})} description={t('error.seo.metaDescription500', {errorCode: '500'})} />
          <ErrorBoundary statusCode={'500'} error={props.error}/>

          <div className="server_error_page_wrapper">
        <div>
            <div  className="server_error_page_text_subtitle">
                {t('error.tryAgain')}
            </div>
        </div>
    </div>
    <style jsx>{`
        .server_error_page_wrapper {
            color:#000;
            background:#fff;
            font-family: BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
            text-align:center;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

        .server_error_page_text {
            display:inline-block;
            border-right:1px solid rgba(0, 0, 0,.3);
            margin:0;
            margin-right:20px;
            padding:10px 23px 10px 0;
            font-size:24px;
            font-weight:500;
            vertical-align:top;
        }

        .server_error_page_text_subtitle {
            display:inline-block;
            text-align:left;
            line-height:49px;
            height:49px;
            vertical-align:middle;
        }

        .server_error_page_text_subtitle h2 {
            font-size:14px;
            font-weight:normal;
            line-height:inherit;
            margin:0;
            padding:0
        }

        @media(max-width:770px){
          .server_error_page_wrapper{
            padding: 0 25px;
            height: calc(100vh - 197px);
            background:inherit;
          }

          .server_error_page_text_subtitle{
            height:100%;
          }
        }
    `}
    </style>
    </>
  )
}

export default Custom500;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
