export const limitationEvents = {
    'stockList': ['limit_stocks_ranking', 'limit_stocks_ranking'],
    'topCountry': ['limit_stocks_top25_by_country', 'limit_stocks_top25_by_country'],
    'tickerPageTop5Industry': ['limit_stock_page_top5', 'limit_stock_page_top5'],
    'tickerPageTop5Sector': ['limit_stock_page_top5', 'limit_stock_page_top5'],
    'tickerPageAlphaOdds': ['limit_stock_page_apha_odds', 'limit_stock_page_apha_odds'],
    'tickerPageScoreEvolution': ['limit_stock_page_scores_evolution', 'limit_stock_page_scores_evolution'],
    'tickerPageAlphaSignals': ['limit_stock_page_alpha_signals', 'limit_stock_page_alpha_signals'],
    'tickerPageStockAnalysis': ['limit_stock_page_ranking_sector_industry', 'limit_stock_page_ranking_sector_industry'],
    'view_paywall_stockpage': ['limit_stock_page_ranking_sector_industry', 'limit_stock_page_ranking_sector_industry'],
    'tickerPageAlphaSignalsPro': ['limit_stock_page_alpha_signals_plus_user', 'limit_stock_page_alpha_signals_plus_user'],
    'tickerPageAlphaSignalsOrder': ['limit_stock_page_alpha_signals_order', 'limit_stock_page_alpha_signals_order'],
    'tickerPageAIScore': ['limit_stock_page_scores', 'limit_stock_page_scores'],
    'sector': ['limit_sector_stocks_ranking', 'limit_sector_stocks_ranking'],
    'industry': ['limit_industry_stocks_ranking', 'limit_industry_stocks_ranking'],
    'sectors': ['limit_sectors_ranking', 'limit_sectors_ranking'],
    'industries': ['limit_industries_ranking', 'limit_industries_ranking'],
    'comparePageCompare': ['limit_compare_scores', 'limit_compare_scores'],
    'comparePagePriceEvolution': ['limit_compare_price_evolution', 'limit_compare_price_evolution'],
    'comparePageStockInformation': ['limit_compare_stock_info', 'limit_compare_stock_info'],
    'comparePageFundamentals': ['limit_compare_fundamentals', 'limit_compare_fundamentals'],
    'comparePageAIScore': ['limit_compare_scores_evolution', 'limit_compare_scores_evolution'],
    'comparePageTop5Sector': ['limit_compare_page_top5_sector', 'limit_compare_page_top5_sector'],
    'comparePageTop5Industry': ['limit_compare_page_top5_industry', 'limit_compare_page_top5_industry'],
    'compareAll': ['limit_compare_all_stocks', 'limit_compare_all_stocks'],
    'compareModalIndustry': ['limit_compare_modal', 'limit_compare_modal'],
    'compareModalSector': ['limit_compare_modal', 'limit_compare_modal'],
    'tradeIdeas': ['limit_trade_ideas', 'limit_trade_ideas'],
    'investmentThemesStocks': ['limit_investment_theme_stocks', 'limit_investment_theme_stocks'],
    'investmentThemesList': ['limit_investment_theme_list', 'limit_investment_themes_list'],
    'relatedInvestmentThemes': ['limit_related_investment_themes', 'limit_related_investment_themes'],
    'stockPage5sec': ['trial_stock_page_5_sec', 'trial_stock_page_5_sec'],
    'comparePage5sec': ['trial_compare_page_5_sec', 'trial_compare_page_5_sec'],
    'topStocksUpgradeZone': ['trial_top_stocks_upgrade_zone', 'trial_top_stocks_upgrade_zone'],
    'etfsUpgradeZone': ['trial_etfs_upgrade_zone', 'trial_etfs_upgrade_zone'],
    'tradeIdeasUpgradeZone': ['trial_trade_ideas_upgrade_zone', 'trial_trade_ideas_upgrade_zone'],
    'sectorsUpgradeZone': ['trial_sectors_upgrade_zone', 'trial_sectors_upgrade_zone'],
    'industriesUpgradeZone': ['trial_industries_upgrade_zone', 'trial_industries_upgrade_zone'],
    'investmentThemesUpgradeZone': ['trial_investment_themes_upgrade_zone', 'trial_investment_themes_upgrade_zone'],
    'topCountriesUpgradeZone': ['trial_top_countries_upgrade_zone', 'trial_top_countries_upgrade_zone'],
    'sectorUpgradeZone': ['trial_sector_upgrade_zone', 'trial_sector_upgrade_zone'],
    'industrieUpgradeZone': ['trial_industry_upgrade_zone', 'trial_industry_upgrade_zone'],
    'investmentThemeUpgradeZone': ['trial_investment_theme_upgrade_zone', 'trial_investment_theme_upgrade_zone'],
    'limitPortfolio5secFreeUser': ['trial_limit_portfolio_5_sec_free_user', 'trial_limit_portfolio_5_sec_free_user'],
    'topEtfs': ['limit_etfs_ranking', 'limit_etfs_ranking'],
    'suggestedParameters': ['limit_stock_page_parameters', 'limit_stock_page_parameters'],
}

export const limitationModalData = (t, comesFrom, user, type) => {
    const userRole = user?.user_role;

    const desktopImages = {
        compareModalIndustry: '/images/limitationModals/Desktop/compare-page/compare-industry.png',
        compareModalSector: '/images/limitationModals/Desktop/compare-page/compare-sector.png',
        compareAll: '/images/limitationModals/Desktop/compare-page/compare-all.png',
        comparePageAIScore: '/images/limitationModals/Desktop/compare-page/ai-score.png',
        comparePageCompare: '/images/limitationModals/Desktop/compare-page/compare.png',
        comparePageFundamentals: '/images/limitationModals/Desktop/compare-page/fundamentals.png',
        comparePagePriceEvolution: '/images/limitationModals/Desktop/compare-page/price-evolution.png',
        comparePageStockInformation: '/images/limitationModals/Desktop/compare-page/stock-information.png',
        comparePageTop5Sector: '/images/limitationModals/Desktop/compare-page/best-alternatives-sector.png',
        comparePageTop5Industry: '/images/limitationModals/Desktop/compare-page/best-alternatives-industry.png',
        industries: '/images/limitationModals/Desktop/industries/industries.png',
        industry: '/images/limitationModals/Desktop/industries/industry.png',
        sectors: '/images/limitationModals/Desktop/sectors/sectors.png',
        sector: '/images/limitationModals/Desktop/sectors/sector.png',
        stockList: '/images/limitationModals/Desktop/stock-list/stock-list.png',
        topCountry: '/images/limitationModals/Desktop/top-country/top-country.png',
        topEtfs: '/images/limitationModals/Desktop/top-etfs/top-etfs.png',
        tickerPageStockAnalysis: "/images/limitationModals/Desktop/stock/ai-score-stock-analysis.png",
        view_paywall_stockpage: "/images/limitationModals/Desktop/stock/ai-score-stock-analysis.png",
        tickerPageAIScore: "/images/limitationModals/Desktop/stock/ai-score.png",
        tickerPageAlphaSignals: "/images/limitationModals/Desktop/stock/alpha-signals-stock-analysis.png",
        tickerPageAlphaSignalsPro: "/images/limitationModals/Desktop/stock/alpha-signals-stock-analysis.png",
        tickerPageAlphaOdds: "/images/limitationModals/Desktop/stock/odds-stock-analysis.png",
        tickerPageFloatingHeader: "/images/limitationModals/Desktop/stock/ai-score.png",
        tickerPageScoreEvolution: "/images/limitationModals/Desktop/stock/score-evolution.png",
        tickerPageTop5Industry: "/images/limitationModals/Desktop/stock/top-5-Industry.png",
        tickerPageTop5Sector: "/images/limitationModals/Desktop/stock/top-5-sector.png",
        tickerPageAlphaSignalsOrder: "/images/limitationModals/Desktop/stock/alpha-signals-stock-analysis-order.png",
        tickerPageAvgPastPerfWinRate: "/images/limitationModals/Desktop/stock/avg-past-perf-win-rate.png",
        tickerPagePastBuySignalsPerf: "/images/limitationModals/Desktop/stock/past-buy-signals-perf.png",
        tickerPageForecast: "/images/limitationModals/Desktop/stock/past-buy-signals-perf.png",
        portfolioFree: "/images/limitationModals/Desktop/portfolio/popup-plus-desktop-v2.png",
        portfolioPlus: "/images/limitationModals/Desktop/portfolio/popup-pro-desktop-v2.png",
        tradeIdeas: "/images/limitationModals/Desktop/tradeideas/trade-ideas.png",
        investmentThemesStocks: "/images/limitationModals/Desktop/investment-themes/investmentThemesStocks.png",
        investmentThemesList: "/images/limitationModals/Desktop/investment-themes/investmentThemesList.png",
        relatedInvestmentThemes: "/images/limitationModals/Desktop/investment-themes/relatedInvestmentThemes.png",
        suggestedParameters: "/images/limitationModals/Desktop/stock/suggestedParameters.png",
    }

    const mobileImages = {
        compareModalIndustry: '/images/limitationModals/Mobile/compare-page/compare-industry.png',
        compareModalSector: '/images/limitationModals/Mobile/compare-page/compare-sector.png',
        compareAll: '/images/limitationModals/Mobile/compare-page/compare-all.png',
        comparePageAIScore: '/images/limitationModals/Mobile/compare-page/ai-score-evolution.png',
        comparePageCompare: '/images/limitationModals/Mobile/compare-page/ai-score.png',
        comparePageFundamentals: '/images/limitationModals/Mobile/compare-page/fundamentals.png',
        comparePagePriceEvolution: '/images/limitationModals/Mobile/compare-page/price-evolution.png',
        comparePageStockInformation: '/images/limitationModals/Mobile/compare-page/stock-information.png',
        comparePageTop5Sector: '/images/limitationModals/Mobile/compare-page/best-alternatives-sector-mobile.png',
        comparePageTop5Industry: '/images/limitationModals/Mobile/compare-page/best-alternatives-industry-mobile.png',
        industries: '/images/limitationModals/Mobile/industries/industries.png',
        industry: '/images/limitationModals/Mobile/industries/industry.png',
        sectors: '/images/limitationModals/Mobile/sectors/sectors.png',
        sector: '/images/limitationModals/Mobile/sectors/sector.png',
        stockList: '/images/limitationModals/Mobile/stock-list/stock-list.png',
        topCountry: '/images/limitationModals/Mobile/top-country/top-country.png',
        topEtfs: '/images/limitationModals/Mobile/top-etfs/top-etfs.png',
        tickerPageStockAnalysis: "/images/limitationModals/Mobile/stock/ai-score-stock-analysis.png",
        view_paywall_stockpage: "/images/limitationModals/Mobile/stock/ai-score-stock-analysis.png",
        tickerPageAIScore: "/images/limitationModals/Mobile/stock/ai-score.png",
        tickerPageAlphaSignals: "/images/limitationModals/Mobile/stock/alpha-signals-stock-analysis.png",
        tickerPageAlphaSignalsPro: "/images/limitationModals/Mobile/stock/alpha-signals-stock-analysis.png",
        tickerPageAlphaOdds: "/images/limitationModals/Mobile/stock/odds-stock-analysis.png",
        tickerPageFloatingHeader: "/images/limitationModals/Mobile/stock/ai-score.png",
        tickerPageScoreEvolution: "/images/limitationModals/Mobile/stock/ai-scores-evolution.png",
        tickerPageTop5Industry: "/images/limitationModals/Mobile/stock/top-5-industry.png",
        tickerPageTop5Sector: "/images/limitationModals/Mobile/stock/top-5-sector.png",
        tickerPageAlphaSignalsOrder: "/images/limitationModals/Mobile/stock/alpha-signals-stock-analysis.png",
        tickerPageAvgPastPerfWinRate: "/images/limitationModals/Mobile/stock/avg-past-perf-win-rate-mobile.png",
        tickerPagePastBuySignalsPerf: "/images/limitationModals/Mobile/stock/past-buy-signals-perf-mobile.png",
        tickerPageForecast: "/images/limitationModals/Mobile/stock/past-buy-signals-perf-mobile.png",
        portfolioFree: "/images/limitationModals/Mobile/portfolio/imagen-popup-plus-mobile-v2.png",
        portfolioPlus: "/images/limitationModals/Mobile/portfolio/imagen-popup-pro-mobile-v2.png",
        tradeIdeas: "/images/limitationModals/Mobile/tradeideas/trade-ideas-mobile.png",
        investmentThemesStocks: "/images/limitationModals/Mobile/investment-themes/investmentThemesStocks.png",
        investmentThemesList: "/images/limitationModals/Mobile/investment-themes/investmentThemesList.png",
        relatedInvestmentThemes: "/images/limitationModals/Mobile/investment-themes/relatedInvestmentThemes.png",
        suggestedParameters: "/images/limitationModals/Mobile/stock/suggestedParameters.png",
    }

    const tickerPageTitle = ['tickerPageStockAnalysis', 'view_paywall_stockpage' ,'tickerPageAIScore', 'tickerPageAlphaSignals', 'tickerPageAlphaSignalsPro', 'tickerPageAlphaOdds', 'tickerPageFloatingHeader', 'tickerPageScoreEvolution', 'tickerPageTop5Industry', 'tickerPageTop5Sector', 'tickerPageAlphaSignalsOrder', 'tickerPageAvgPastPerfWinRate', 'tickerPagePastBuySignalsPerf', 'tickerPageForecast', 'suggestedParameters']
    const comparePageTitle = ['comparePageTop5Sector', 'comparePageTop5Industry', 'comparePageAIScore', 'comparePageCompare', 'comparePageFundamentals', 'comparePagePriceEvolution', 'comparePageStockInformation', 'compareModalIndustry', 'compareModalSector', 'compareAll']

    const title = {
        stockList: t('generals.limits.stockListLimitation.stockListLimitationTitle'),
        topCountry: t('generals.limits.topCountryLimitation.topCountryLimitationTitle'),
        topEtfs: t('generals.limits.topEtfsLimitation.topEtfsLimitationTitle'),
        industry: t('generals.limits.industryLimitation.industryLimitationTitle'),
        industries: t('generals.limits.industryLimitation.industryListLimitationTitle'),
        investmentThemesStocks: t('generals.limits.investmentThemesLimitation.investmentThemesTitle'),
        investmentThemesList: t('generals.limits.investmentThemesLimitation.investmentThemesListTitle'),
        relatedInvestmentThemes: t('generals.limits.investmentThemesLimitation.relatedInvestmentThemesLimitationTitle'),
        sector: t('generals.limits.sectorLimitation.sectorLimitationTitle'),
        sectors: t('generals.limits.sectorLimitation.sectorListLimitationTitle'),
        tradeIdeas: t('generals.limits.tradeIdeasLimitation.tradeIdeasLimitationTitle'),
        ...Object.fromEntries(
        tickerPageTitle.map(key => [key, t('generals.limits.tickerPageLimitation.tickerPageLimitationTitle')])
        ),
        ...Object.fromEntries(
        comparePageTitle.map(key => [key, t('generals.limits.comparisionLimitation.comparisionLimitationTitle')])
        ),
    }

    const proText = (value) => value === 'tickerPageAlphaSignalsPro' || value === 'suggestedParameters';

    const description = {
        stockList: t('generals.limits.stockListLimitation.stockListLimitationDescription'),
        topCountry: t('generals.limits.topCountryLimitation.topCountryLimitationDescription'),
        topEtfs: t('generals.limits.topEtfsLimitation.topEtfsLimitationDescription'),
        industry: t('generals.limits.industryLimitation.industryLimitationDescription'),
        industries: t('generals.limits.industryLimitation.industryListLimitationDescription'),
        investmentThemesStocks: t('generals.limits.investmentThemesLimitation.investmentThemesDescription'),
        investmentThemesList: t('generals.limits.investmentThemesLimitation.investmentThemesListDescription'),
        relatedInvestmentThemes: t('generals.limits.investmentThemesLimitation.relatedInvestmentThemesLimitationDescription'),
        sector: t('generals.limits.sectorLimitation.sectorLimitationDescription'),
        sectors: t('generals.limits.sectorLimitation.sectorListLimitationDescription'),
        scoresExplanation: t('generals.limits.sectorLimitation.sectorListLimitationDescription'),
        tradeIdeas: t('generals.limits.tradeIdeasLimitation.tradeIdeasLimitationDescription'),
        ...Object.fromEntries(
        tickerPageTitle.map(key => [key, t(`generals.limits.tickerPageLimitation.${proText(key) ? 'tickerPageLimitationDescriptionPro' : 'tickerPageLimitationDescription'}`)])
        ),
        ...Object.fromEntries(
        comparePageTitle.map(key => [key, t('generals.limits.comparisionLimitation.comparisionLimitationDescription')])
        ),
    }

    const dataToSend = {
        imageDesktop: desktopImages[comesFrom],
        imageMobile: mobileImages[comesFrom],
        title: title[comesFrom],
        description: description[comesFrom],
        buttonText: t(`generals.limits.${proText(comesFrom) ? "limitationModalButtonPro" : "limitationModalButton"}`),
        trailText: t(`generals.limits.${proText(comesFrom) ? "limitationModalProTrialText" : "limitationModalFreeTrailText"}`),
        trailCancel: t('generals.limits.limitationModalCancelText'),
        compareText: t('generals.limits.limitationModalCompareText'),
        pricingText: t('generals.limits.limitationModalPlansAndPricingText'),
        comesFrom: comesFrom
    }

    if (comesFrom === 'portfolioPage' || comesFrom === 'portfolioStockPage') {
        if (userRole === "FREE") {
            dataToSend.imageDesktop = desktopImages['portfolioFree']
            dataToSend.imageMobile = mobileImages['portfolioFree']
        } else {
            dataToSend.imageDesktop = desktopImages['portfolioPlus']
            dataToSend.imageMobile = mobileImages['portfolioPlus']
            dataToSend.buttonText = t('generals.limits.portfolioLimitation.plusUserButton')
        }

        if (comesFrom === 'portfolioPage' && userRole === "FREE") {
            dataToSend.title = t('generals.limits.portfolioLimitation.portfolioPage.title')
            dataToSend.description = t('generals.limits.portfolioLimitation.portfolioPage.freeUser')
        } else if (comesFrom === 'portfolioPage' && userRole === "PLUS") {
            dataToSend.title = t('generals.limits.portfolioLimitation.portfolioPage.title')
            dataToSend.description = t('generals.limits.portfolioLimitation.portfolioPage.plusUser')
        } else if (comesFrom === 'portfolioStockPage' && userRole === "FREE") {
            dataToSend.title = t('generals.limits.portfolioLimitation.portfolioStockPage.title')
            dataToSend.description = t('generals.limits.portfolioLimitation.portfolioStockPage.freeUser')
        } else {
            dataToSend.title = t('generals.limits.portfolioLimitation.portfolioStockPage.title')
            dataToSend.description = t('generals.limits.portfolioLimitation.portfolioStockPage.plusUser')
        }
    }

    dataToSend.type = type || null;

    return dataToSend
}

