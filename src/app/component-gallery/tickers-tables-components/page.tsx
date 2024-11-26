import {Locale} from "@/i18n-config.ts";
import {useTranslation} from "@/src/app/i18n";
import React from "react";
import TableSlim001Titles from "@/src/Tickers/Infrastructure/Components/TableSlim001Titles.tsx";
import Link from "next/link";
import TableSlim001Item from "@/src/Tickers/Infrastructure/Components/TableSlim001Item.tsx";

type Props = {
    params: {
        slug: string;
        lng: Locale;
    };
};

export default async function IndexPage({params: {slug, lng},}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslation(lng, 'common')

    return (
        <>
            <h1 className="text-3xl font-bold underline pb-10">Tickers Tables Components</h1>

            <section>
                <h2 className="text-2xl font-bold underline pb-5">TableSlim001Titles</h2>
                <TableSlim001Titles>
                    <div className="w-[16%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                        {t('popularSearches.table.rank')}
                    </div>
                    <div className="w-[63%] sm:w-[448px] flex justify-center items-center border-l border-r">
                        {t('popularSearches.table.company')}
                    </div>
                    <div className="w-[21%] sm:w-[100px] flex justify-center items-center">
                        {t('popularSearches.table.aiScore')}
                    </div>
                </TableSlim001Titles>

                <hr className="m-4"/>

                <TableSlim001Titles>
                    <div className="w-[36%] sm:w-[291px] flex justify-center items-center">
                        {t('allStocks.table.country')}
                    </div>
                    <div className="w-[20%] sm:w-[82px] flex justify-center items-center border-l border-r">
                        {t('allStocks.table.company')}
                    </div>
                    <div className="w-[42%] sm:w-[259px] flex justify-center items-center">
                        {t('allStocks.table.industry')}
                    </div>
                </TableSlim001Titles>

                <hr className="m-4"/>

                <TableSlim001Titles>
                    <div className="w-[20%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                        {t('popularComparisons.table.rank')}
                    </div>
                    <div className="w-[100%] flex justify-center items-center border-l">
                        {t('popularComparisons.table.company')}
                    </div>
                </TableSlim001Titles>

                <hr className="m-4"/>
            </section>
            <section className="">
                <h2 className="text-2xl font-bold underline pb-5">TableSlim001Item</h2>

                <TableSlim001Titles>
                    <div className='flex items-center justify-center w-[100%]'>TableSlim001Titles</div>
                </TableSlim001Titles>
                <div className="w-[100%] sm:w-[630px] rounded-b-[6px] mb-[50px] sm:border-l sm:border-b sm:border-r border-solid border-[var(--clr-border)] ">
                    <ul>
                        <TableSlim001Item key="">
                            <span className="w-[16%] max-w-[80px] sm:w-[80px] flex justify-center items-center">{1}</span>
                            <span className="w-[63%] sm:w-[448px] flex items-center">
                                   <Link href="/" title=''>
                                       {t('popularSearches.table.tableData', {shortName: '--shortName--'})}
                                   </Link>
                                 </span>
                            <span className="w-[21%] sm:w-[100px] flex justify-center items-center">
                                   <img
                                       src={process.env.NEXT_PUBLIC_CDN_URL + `/images/donutScores/9.svg`}
                                       alt="AI score"
                                       width="33px"
                                       height="33px"
                                   />
                            </span>
                        </TableSlim001Item>
                        <TableSlim001Item key="">
                            <span className="w-[36%] sm:w-[291px] flex items-center pl-[10px] sm:pl-[21px]">
                                <Link href="/" title=''>
                                    --A2A SPA (A2.Mi)--
                                </Link>
                            </span>
                            <span className="w-[20%] sm:w-[82px] flex justify-center items-center">
                               ***
                            </span>
                            <span className="w-[42%] sm:w-[259px] flex items-center pl-[10px] sm:pl-[21px]">
                                Life Sciences Tools & Services
                            </span>
                        </TableSlim001Item>
                        <TableSlim001Item key="">
                            <span className="w-[20%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                                {1}
                            </span>
                            <span className="w-[100%] flex items-center">
                                <Link href="/" title=''>
                                --ShortName1-- {t('popularComparisons.table.vs')} --ShortName2--
                                </Link>
                            </span>
                        </TableSlim001Item>
                    </ul>
                </div>
                    <hr className="m-4"/>
            </section>

        </>
);
}

export async function generateMetadata({
    params
}) {
    return {
        robots: {
            index: false,
            follow: false,
            nocache: false,
            googleBot: {
                index: false,
                follow: false,
            }
        },
    }
}
