"use client"
import { useTranslation } from "next-i18next";
import common from '@/public/locales/en/common'
import Link from "next/link";
import useRouter from "@/hooks/useRouter";
import {usePathname} from "next/navigation";
import {useRecoilState} from "recoil";
import {marketState} from "@/context/hybridState";


const BreadCrumbsApp = ({ market, sector, sectorUrl, industry, industryUrl,
    ticker, company_name, sectorName, industryName, top, myPortfolio,
    portfolio, versus, compare, compareLink, isABuy, popularLink, extraClass,
    blackText, isEtf, focus, etfName, investmentThemes, isIT, isGroup }) => {
    const { t } = useTranslation('common')
    const {router, context} = useRouter()
    const focusURL = `/top-etfs?focus=${focus?.split(' ').join('')}`
    const pathname = usePathname()
    const canonicalUrl = context === 'app' ? pathname.split('?')[0].replace(/^\/+/, '') : router?.asPath.split('?')[0].replace(/^\/+/, '');

    const [universeState, setUniverseState] = useRecoilState(context === 'app' && marketState);

    return (
        <div className='pl-2 pr-0 pt-[38px] pb-0 flex '>
            <Link
            href="/"
            title="Danelfin: AI-Powered Stock Analytics Platform"
            legacyBehavior>
                <span className="stock-chart-top-link">{common.breadCrumbs.home}</span>
            </Link>
            {market === 'eu' ?
            <Link
            href="/european-stocks"
            title="European Stocks: AI scores, stock prices, forecasts, analysis"
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{common.breadCrumbs.europeanMarket}</span>
            </Link>
            :
            market === 'usa' ?
            <Link
            href="/us-stocks"
            title="US Market Stocks: AI scores, stock prices, forecasts, analysis"
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{common.breadCrumbs.usMarket}</span>
            </Link>
            :
            ""
            }
            {isIT ? <Link
            href={"/stocks/investment-themes"}
            className="card-link add-a-bar"
            title={`Best ${sector} stocks ${market === 'eu' ? '(Europe)' : ''}`}
            legacyBehavior>
                <span className="stock-chart-top-link">{common.breadCrumbs.investmentThemes}</span>
            </Link>
            : ""}
            {sector ?
            <Link
            href={sector === "sector" ? `/stocks${market === 'eu' ? '/eu' : ''}/sectors` : `/stocks${market === 'eu' ? '/eu' : ''}/${sectorUrl}`}
            className={`card-link add-a-bar ${isGroup && 'no-underline-stock-chart'}`}
            title={`Best ${industry} stocks ${market === 'eu' ? '(Europe)' : ''}`}
            legacyBehavior>
                <span className="stock-chart-top-link">{sector}</span>
            </Link>
            : ""
            }
            {industry ?
            <Link
            href={industry === "industry" ? `/stocks${market === 'eu' ? '/eu' : ''}/industries` : `/stocks${market === 'eu' ? '/eu' : ''}/${industryUrl}`}
            className={`card-link add-a-bar ${isGroup && 'no-underline-stock-chart'}`}
            title={`Best ${industry} stocks ${market === 'eu' ? '(Europe)' : ''}`}
            legacyBehavior>
                <span className="stock-chart-top-link">{industry}</span>
            </Link>
            : ""
            }
            {isEtf && focus ?
            <Link
            href="/top-etfs"
            title={`Best ETFs to buy`}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{t('etfs.breadCrumb')}</span>
            </Link>
            : ""
            }
            {isEtf && focus ?
            <Link
            href={focusURL}
            title={t(`etfs.titleFocus`, {focus: focus})}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{focus}</span>
            </Link>
            : ""
            }
            {ticker || isEtf ?
            <Link
            href={`/${isEtf ? "etf" : "stock"}${market === "eu" ? "/eu" : ""}/${ticker}`}
            className={`card-link add-a-bar ${investmentThemes ? "" : "no-underline-stock-chart"}`}
            title={`${ticker} ${isEtf ? "ETF" : "Stock Price"}`}
            legacyBehavior>
                <a className={`card-link add-a-bar ${investmentThemes ? "" : "no-underline-stock-chart"}`} title={`${ticker} ${isEtf ? "ETF" : "Stock Price"}`}>
                    <span className="stock-chart-top-link">{ticker}</span>
                </a>
            </Link>
            : ""
            }
            {sectorName || industryName ?
            <Link
            href="#"
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{sectorName || industryName}</span>
            </Link>
            : ""
            }
            {top ?
            <Link href={canonicalUrl} legacyBehavior>
                <span className="stock-chart-top-link">{top}</span>
            </Link>
            : ""
            }
            {myPortfolio ?
            <Link
            href="/user/my-portfolios"
            className={`card-link add-a-bar ${portfolio ? "" : 'no-underline-stock-chart'}`}
            legacyBehavior>
                <span className="stock-chart-top-link">{myPortfolio}</span>
            </Link>
            : ""
            }
            {portfolio ?
            <Link href={`${context === 'app' ? pathname : router?.asPath}`} legacyBehavior>
                <span className="stock-chart-top-link">{portfolio}</span>
            </Link>
            : ""
            }
            {versus ?
            <Link
            href={`${context === 'app' ? pathname : router?.asPath}`}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{versus}</span>
            </Link>
            : ""
            }
            {compare ?
            <Link
            href={compareLink}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{compare}</span>
            </Link>
            :
            ""
            }
            {isABuy ?
            <Link
            href={`${context === 'app' ? pathname : router?.asPath}`}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{isABuy}</span>
            </Link>
            :
            ""
            }
            {popularLink ?
            <Link
            href={`${context === 'app' ? pathname : router?.asPath}`}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{popularLink}</span>
            </Link>
            :
            ""
            }
            {investmentThemes ?
            <Link
            href={`${context === 'app' ? pathname : router?.asPath}`}
            className={`card-link add-a-bar ${isGroup && 'no-underline-stock-chart'}`}
            legacyBehavior>
                <span className="stock-chart-top-link">{common.breadCrumbs.investmentThemes}</span>
            </Link>
            :
            ""
            }
            {blackText ?
            <Link
            href={`${context === 'app' ? pathname : router?.asPath}`}
            className='before:content-["/"] before:text-[black] before:no-underline before:px-2'
            legacyBehavior>
                <span className="stock-chart-top-link">{blackText}</span>
            </Link>
            :
            ""
            }
        </div>
    )
}

export default BreadCrumbsApp
