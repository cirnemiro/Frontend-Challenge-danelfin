import { useState } from "react";
import { DataTable } from "../ReactTable/DataTable";
import { useStockColumns } from "@/src/Shared/Domain/StocksTableContants";
import { useFetchStocks } from "@/src/Shared/Infrastructure/api/queries/useFetchStocks";

type Sorting = {
  column: string;
  direction: "asc" | "desc";
};

export default function StocksTablePageContent() {
  const [sorting, setSorting] = useState<Sorting>({
    column: "",
    direction: "desc",
  });

  const { data: stocks, isLoading } = useFetchStocks({
    limit: 5,
    order_by: sorting.column,
    order_dir: sorting.direction,
  });

  const stockColumns = useStockColumns();

  return (
    <DataTable
      columns={stockColumns}
      isDataLoading={isLoading}
      data={stocks?.data}
      setSorting={setSorting}
      sorting={sorting}
    />
  );
}
