"use client";
import { Locale } from "@/i18n-config.ts";
import { useTranslation } from "@/src/app/i18n";
import PaginationComponentAppAll from "@/src/Shared/Infrastructure/Components/PaginationComponentAppAll/PaginationComponentAppAll";
import { useTopStockColumns } from "./TopStockTableConstants";
import { useFetchStocks } from "@/src/Shared/Infrastructure/api/queries/useFetchStocks";
import { DataTable } from "@/components/ReactTable/DataTable";

type Props = {
  params?: {
    lng: Locale;
  };
  searchParams?: any;
  limit?: number;
  isEtf?: boolean;
};

const TopStocksTable = async ({ params: { lng }, limit = 10 }: Props) => {
  const { t } = await useTranslation(lng, "common");
  const offset = 0;
  let total = 0;
  let from = 0;
  let to = 0;
  const alphabetParam = "A";

  const topStocksColumns = useTopStockColumns();

  return (
    <>
      <div className="flex flex-col items-center box-border table-container">
        {/* <DataTable
          columns={topStocksColumns}
          isDataLoading={isLoading}
          data={stocks?.data}
          petition={useFetchStocks}
        /> */}
        <div className="w-[100%] sm:w-[630px] rounded-b-[6px] mb-[24px] sm:border-l sm:border-b sm:border-r border-solid border-[var(--clr-border)] "></div>
        <PaginationComponentAppAll
          total={total}
          limit={limit}
          offset={offset}
          copy={t("genericTable.paginationEtfStocksWFilterAZ", {
            showingFrom: from,
            showingTo: to,
            totalNum: total,
            stockOrEtf: t("genericTable.stocks"),
            letter: alphabetParam,
          })}
          url={`/all-stocks`}
          letter={alphabetParam}
        />
      </div>
    </>
  );
};

export default TopStocksTable;
