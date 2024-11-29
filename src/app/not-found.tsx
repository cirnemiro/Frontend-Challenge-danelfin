import dynamic from "next/dynamic";
const PageNotFound = dynamic(() => import('@/components/404component/404component'));

export default function NotFound() {
    return <PageNotFound statusCode={undefined} error={'404'} api={undefined} />

}
