import React, { useState } from "react";
import HomeTablesNav from "./HomeTablesNav/HomeTablesNav";
import styles from "./HomeTablesStyles";
import StocksTablePageContent from "@/components/StocksTablePageContent/StocksTablePageContent";
import Navbar from "@/components/NavBar/Navbar";

import { TFunction } from "i18next";
import Link from "next/link";

interface HomeTablesProps {
  t: TFunction;
}

const HomeTables = ({ t }: HomeTablesProps) => {
  const [topStocksActive, setTopStocksActive] = useState(true);
  const [topEtfsActive, setTopEtfsActive] = useState(false);

  return (
    <>
      <Navbar />
      <div
        className={`home-tables-wrapper max-w-[900px] items-center justify-between  mx-auto p-4 text-center flex flex-col gap-8`}
      >
        <h2 className="text-blue-700 font-bold text-[30px]">
          Best Stocks and ETFs Picked by AI
        </h2>
        <div className="w-full">
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
                `home.stockTables.${
                  topStocksActive ? "topStocks" : "etfs"
                }.title`
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
          <div></div>
          <StocksTablePageContent />
          <div className="bg-white  p-4">
            <Link href="/all-stocks" legacyBehavior>
              <a className="text-blue-700 font-bold text-[20px]">
                See the full US stocks ranking
              </a>
            </Link>
          </div>
        </div>
        <div className="max-w-[600px] text-center">
          <h2 className="text-blue-700 font-bold text-[30px] mt-8">
            Smart Investing Made Easy for Everyone
          </h2>
          <p>
            Danelfin's Si does the hard work, analyzing +10.000 features per day
            per stock and rating stocks probability of beating the market with
            the AI score.
          </p>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default HomeTables;
