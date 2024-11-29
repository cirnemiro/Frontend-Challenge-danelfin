"use client"

import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'))
import styles from './404componentStyles';

const PageNotFound = ({ statusCode, error, api}) => {
    const { t } = useTranslation('common');

    const linkMaker = (href, title, text) => <span className="bottom_links">
        <Link href={href} legacyBehavior>
            <a title={title}>{text}</a>
        </Link>
        <style jsx>{styles}</style>
    </span>

    return (
            <>
                <div className="page-not-found-container">
                    <div className="page-not-found-content">
                        <img alt="404 robot" src={'/images/bgImg/robot404.jpg'} className="robot_404" />
                        <div className="desc_404">
                            <span className="opps_text">{t('pageNotFound.opps')}</span>
                            <span className="text_nf">{t('pageNotFound.pageNF')}</span>
                            <span className="search_others">{t('pageNotFound.searchOthers')}</span>
                            <span className="others_options">
                                {linkMaker('/us-stocks', t('navbar.anchorTitles.usStocks'), t('footer.tops.us'))}
                                {linkMaker('/european-stocks', t('navbar.anchorTitles.euStocks'), t('footer.tops.european'))}
                                {linkMaker('/trade-ideas', t('tradeIdeas.seo.title'), t('footer.bottomNavbar.trade'))}
                                {linkMaker('/stocks/investment-themes/', t('investmentThemes.seo.title'), t('sectors.columnHeaders.investment'))}
                            </span>
                        </div>
                    </div>
                </div>
                <ErrorBoundary statusCode={'404'} error={error} api={api}/>
                <style jsx>{styles}</style>
            </>
    )
}

export default PageNotFound;
