import { useEffect, useState } from "react";
import { DataTable } from "../ReactTable/DataTable";
import { useDebounce } from "@/hooks/useDebounce";
import { useStockColumns } from "@/src/Shared/Domain/StocksTableContants";
import { useFetchStocks } from "@/src/Shared/Infrastructure/api/queries/useFetchStocks";

export default function StocksTablePageContent() {
  const [pagination, setPagination] = useState<any>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = useState<any>({
    column: "",
    direction: "DESC",
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
      petition={useFetchStocks}
    />
  );
}
