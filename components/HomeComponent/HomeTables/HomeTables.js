import React, { useState } from "react";
import HomeTablesNav from "./HomeTablesNav/HomeTablesNav";
import styles from "./HomeTablesStyles";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { FILTERS_MAP } from "@/src/Tickers/Domain/Filter";
import StocksTablePageContent from "@/components/StocksTablePageContent/StocksTablePageContent";

const HomeTables = ({ t, topStocksTable, isCompare, topStocks, topEtfs }) => {
  const [topStocksActive, setTopStocksActive] = useState(true);
  const [topEtfsActive, setTopEtfsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={`home-tables-wrapper ${isCompare ? "compare-page" : ""}`}>
        {isCompare ? (
          <>
            <p className="title">{t("comparePage.bestStocks.title")}</p>
            <p className="description">
              {t("comparePage.bestStocks.usdescription")}
              <span className="description-percentage">
                {t("comparePage.bestStocks.usdescriptionPercentage")}
              </span>
              {t("comparePage.bestStocks.usdescription2")}
            </p>
          </>
        ) : (
          <></>
        )}
        <HomeTablesNav
          setTopEtfsActive={setTopEtfsActive}
          setTopStocksActive={setTopStocksActive}
          t={t}
          topStocksActive={topStocksActive}
          topEtfsActive={topEtfsActive}
        />
        <div className="home-tables-title">
          <h2>
            {t(
              `home.stockTables.${topStocksActive ? "topStocks" : "etfs"}.title`
            )}
          </h2>
          <p>
            {t(
              `home.stockTables.${
                topStocksActive ? "topStocks" : "etfs"
              }.description`
            )}
          </p>
        </div>

        {/*TODO: Add the home listing component here*/}
        <StocksTablePageContent></StocksTablePageContent>

        {loading ? <LoadingSpinner /> : <></>}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default HomeTables;
