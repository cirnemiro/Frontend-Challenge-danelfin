"use client"

import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Skeleton from '../Skeleton/Sekeleton';
import DoughnutComponents from '../DoughnutComponents/DoughnutComponents';
import ModalAiScore from '../ModalAiScore/ModalAiScore';
import styles, { chartJs, compareDonuts, isABuyPage } from './DonutsScoresStyles.js';

const DonutsScores = ({ aiScore, fundamentalScore, technicalScore, sentimentScore, riskScore, beatingTheMarket, market, comesFrom, order, isCompare, showAiScore, setShowAiScore, scrollFunction }) => {
    const [showModalAiScore, setShowModalAiScore] = useState(false);
    const [allBeatingTheMarket, setAllBeatingTheMarket] = useState(null)
    const applyRestrictions = true
    const { t } = useTranslation('common')
    const seeAIAnalysis = comesFrom == 'tickerPageAIScore' || comesFrom == 'isaABuy';

    useEffect(()=>{
        const allBeatingTheMarketVal = localStorage?.getItem(`beatingMarketPerc${market}`)
        setAllBeatingTheMarket(allBeatingTheMarketVal)
    },[])

    const noUserBlurVersion = true;

    const customAITooltip = () => (applyRestrictions || compareRestrictions()) ? <></> :
    <span className={`tooltiptextCustomAiScore  ${!seeAIAnalysis ? 'customClassTooltipAI' : 'customClassTooltipAITicker'} 
    ${comesFrom == 'isaABuy' ? 'customClassTooltipAIIsABuy' : ''}`}>
        {t('stockChart.tooltip.aiscore', {beatingTheMarket, allBeatingTheMarket})}
        <style jsx>{styles}</style>
    </span>

    const customOtherTooltip = (tooltipCopy) => !applyRestrictions ?
    <span className={`tooltiptextCustomAiScoreSmallTxt customClassTooltipOther ${comesFrom == 'isaABuy' ? 'tooltiptextCustomAiScoreSmallTxtIsABuy' : ''}`}>
        {t(`stockChart.technicalDatas.${tooltipCopy}`)}
        <style jsx>{styles}</style>
    </span>
    :
    <></>

    const rightAiscore = () => {
        if(comesFrom === "comparePageCompare") {
            if(fundamentalScore || technicalScore || sentimentScore || riskScore) {
                return <DoughnutComponents customAITooltip={customAITooltip()} order={order} comesFrom={comesFrom} centralNumber={aiScore} bigOrSmall={'big'} widthAndHeight={"70px"} animationBigDonutTime={3000} extraClass={"doughnut-scores-component-central-number-big"} />
            } else {
                return <span className="compare-page-seo-aiscore">
                    <DoughnutComponents customAITooltip={customAITooltip()} order={order} comesFrom={comesFrom} centralNumber={aiScore} bigOrSmall={'big'} widthAndHeight={"70px"} extraClass={"doughnut-scores-component-central-number-big"} />
                </span>
            }
        } else if (comesFrom === "tickerPageFloatingHeader") {
            return <DoughnutComponents customAITooltip={customAITooltip()} order={order} comesFrom={comesFrom} centralNumber={aiScore} bigOrSmall={'big'} widthAndHeight={"53px"} extraClass={"doughnut-scores-component-central-number-big"} />
        } else {
            return <DoughnutComponents customAITooltip={customAITooltip()} order={order} comesFrom={comesFrom} centralNumber={aiScore} bigOrSmall={'big'} widthAndHeight={comesFrom === "isaABuy" ? "71px" : "70px"} animationBigDonutTime={3000} extraClass={"doughnut-scores-component-central-number-big"} />
        }
    }

    const compareRestrictions = () => {
        if (comesFrom === 'comparePageCompare') {
            if (noUserBlurVersion) return false
            if (order === 0) return false
            return true
        }
    }

    const smallDonut = (score, donutCopy, tooltipCopy) => <div className={`smart-score-punctuation-section tooltipCustomAiScoreSmall`}>
                                {customOtherTooltip(tooltipCopy)}
                                {(score || score === 0) ? <DoughnutComponents order={order} comesFrom={comesFrom} centralNumber={score} bigOrSmall={'small'} widthAndHeight={"27px"} />
                                    : <Skeleton circle={true} height={30} width={30} />}
                                <span className="rounded-description "> {t(`stockChart.technicalDatas.${donutCopy}`)}
                                </span>
                                <style jsx>{styles}</style>
                                <style jsx>{chartJs}</style>
                                <style jsx>{compareDonuts}</style>
                                <style jsx>{isABuyPage}</style>
                            </div>

    return (
        <>
                <ModalAiScore showModalAiScore={showAiScore ? showAiScore : showModalAiScore} handleCloseAiScore={() => setShowAiScore ? setShowAiScore(false) : setShowModalAiScore(false)} isEurope={market === 'eu'} />
            { (fundamentalScore || technicalScore || sentimentScore || riskScore) || comesFrom === 'tickerPageFloatingHeader' ?
            <>
                <div className={`smart-score-punctuation-container ${comesFrom === 'isaABuy' ? 'is-a-buy-styles' : isCompare ? "isCompare" : ''}`}>
                    <div className={` ${comesFrom === 'tickerPageFloatingHeader' ? 'smart-score-punctuation-section--row' : `smart-score-punctuation-section-big ${seeAIAnalysis && 'smart-score-big-ticker'}`}`}>
                        <span className="smart-score-punctuation-section-big-aiscore"> {t('stockChart.aiScoreInfoBuy.aiscore')}
                            {comesFrom === "tickerPageFloatingHeader" ?
                                <></> :
                                <img className="icon-info info-icon-blue-13px"
                                src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/info-ico.svg"} alt="info icon"
                                onClick={() => setShowAiScore ? setShowAiScore(true) : setShowModalAiScore(true)} />
                            }
                        </span>
                        {aiScore ?
                            <span className="text-of-doughnut-with-text">
                                {rightAiscore()}
                            </span>
                            : <Skeleton circle={true} height={80} width={80} />
                        }

                        <span className={`hold-or-sell-section tooltipCustomAiScore ${seeAIAnalysis && 'hos-aiscore'}`}>
                            {applyRestrictions ?
                                'Unlock' : aiScore ? aiScore > 9 ?
                                t('stockChart.aiScoreInfoBuy.strongbuy')
                                : (aiScore <= 9 && aiScore >= 7 ? t('stockChart.aiScoreInfoBuy.buy')
                                    : (aiScore <= 6 && aiScore >= 4 ? t('stockChart.aiScoreInfoBuy.hold')
                                        : (aiScore <= 3 && aiScore >= 2 ? t('stockChart.aiScoreInfoBuy.sell')
                                            : t('stockChart.aiScoreInfoBuy.strongsell'))))
                                : <Skeleton width={100} />}
                            {!applyRestrictions ?
                                <span className={`tooltiptextCustomAiScore ${!seeAIAnalysis ? 'aiscoreBuyTooltip' : 'aiscoreBuyTooltipTicker'}`}>
                                {t('stockChart.tooltip.aiscoreBuy')}
                                </span>
                                : null}
                        </span>
                        {seeAIAnalysis ?
                            <span className="ticker-analysis-button" onClick={scrollFunction}>
                                See AI Analysis
                            </span>
                        : <></>}
                    </div>
                    {comesFrom !== "tickerPageFloatingHeader" ?
                    <div className={`${seeAIAnalysis && 'ticker-page-smart-scores'}`}>
                        <div className={`smart-score-puntuations-small ${seeAIAnalysis && 'analysis-smart-score'}`}>
                        {smallDonut(fundamentalScore, 'fundamentals', 'fundamentalsTooltip')}
                        {smallDonut(technicalScore, 'technical', 'technicalTooltip')}
                        {smallDonut(sentimentScore, 'sentiment', 'sentimentTooltip')}
                        {smallDonut(riskScore, 'lowrisk', 'lowriskTooltip')}
                        </div>
                    </div>
                     : <></>}
                </div>
            </>
            : <Skeleton height={80} width={80} />}
            <style jsx>{styles}</style>
            <style jsx>{chartJs}</style>
            <style jsx>{compareDonuts}</style>
            <style jsx>{isABuyPage}</style>
        </>
    )
}

export default DonutsScores
