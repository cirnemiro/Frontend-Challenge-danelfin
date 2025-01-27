"use client";
import { DataTable } from "@/components/ReactTable/DataTable";
import { useTranslation } from "@/src/app/i18n";
import PaginationComponentAppAll from "@/src/Shared/Infrastructure/Components/PaginationComponentAppAll/PaginationComponentAppAll";
import { useTopStockColumns } from "@/src/Tickers/Infrastructure/Components/TopStockTableConstants";
import { useRouter } from "next/router";

interface PageProps {
  params: {
    offset: number;
    lng: string;
  };
}

const getStocks = async (offset: number) => {
  const url = `http://localhost:5000/stocks?limit=10&offset=${offset}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos para el slug "${offset}"`);
  }
  return response.json();
};

export default async function Page({ params }: PageProps) {
  const { t } = await useTranslation(params.lng, "common");

  const data = await getStocks(params.offset);
  console.log(data);

  const offset = 0;
  let total = 0;
  let from = 0;
  let to = 0;
  const alphabetParam = "A";
  const topStocksColumns = useTopStockColumns();

  return (
    <div className="">
      <div className="flex max-w-[500px] m-auto flex-col items-center box-border table-container p-6">
        <DataTable
          columns={topStocksColumns}
          data={data.data}
          isDataLoading={false}
        />
      </div>

      <PaginationComponentAppAll
        total={100}
        limit={10}
        offset={10}
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
  );
}
