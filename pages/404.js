import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from "next/dynamic";
const PageNotFound = dynamic(() => import('../components/404component/404component'));


const Custom404 = (props) => {
  return <PageNotFound />
}

export default Custom404;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
