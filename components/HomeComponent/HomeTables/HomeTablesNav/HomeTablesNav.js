import Link from 'next/link';
import styles from '../HomeTablesStyles';

const HomeTablesNav = ({t, setTopEtfsActive, setTopStocksActive, topEtfsActive, topStocksActive}) => {

    const navTab = (textCopy, active, url, title, image, onClick, newImage) => {
        const innerText = <span>
                                {image ? <img src={process.env.NEXT_PUBLIC_CDN_URL + image} alt={textCopy} /> : <></>}
                                {textCopy}
                            <style jsx>{styles}</style>
                            </span>
        return (
            <li className={`${active ? 'active' : ''}`}>
                        {url ? <Link href={url} legacyBehavior>
                            <a title={title}>
                                    {innerText}
                            </a>
                        </Link> :
                        <div onClick={onClick} className="">
                            {innerText}
                        </div>
                        }
                        <style jsx>{styles}</style>
                    </li>
        );
    }

  return (
        <ul>
            {navTab(
            t('stockMarketFilter.navs.stocks'), 
            topStocksActive, 
            null, 
            null, 
            "/images/icons/topStocksIcon.svg",
            () => [setTopStocksActive(true), setTopEtfsActive(false)]
            )}
            {navTab(
            t('stockMarketFilter.navs.etfs'), 
            topEtfsActive, 
            null, 
            null, 
            "/images/icons/etfsIcon.svg",
            () => {
                console.log("retrieveEtfs")},
            true
            )}
            {navTab(
            t('stockMarketFilter.navs.trade'), 
            false,
            null,
            t('tradeIdeas.seo.title'), 
            "/images/icons/tradeIdeasIcon.svg",
            () => {
                console.log('trade ideas')},
            )}
            {navTab(
            t('stockMarketFilter.navs.sector'), 
            false, 
            null,
            t('sectors.seo.title', {country: "US"}), 
            null,
            () => {
                console.log('trade ideas')},
            )}
            {navTab(
            t('stockMarketFilter.navs.industries'), 
            false, 
            null,
            t('industries.seo.title', {country: "US"}), 
            null,
            () => {
                console.log('industries')},
            )}
            <style jsx>{styles}</style>
        </ul>
  )
}

export default HomeTablesNav
