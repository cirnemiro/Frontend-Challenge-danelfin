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

  const [filters, setFilters] = useState<any>({});
  const { data: stocks, isLoading } = useFetchStocks({
    limit: 5,
    order_by: sorting.column,
    order_dir: sorting.direction,
  });

  console.log(stocks);

  // const [dateRange, setDateRange] = useState<SelectedDateType>({
  //   startDate: DateMaster.fromDate(new Date()).getStartOf("month").getDate(),
  //   endDate: DateMaster.fromDate(new Date()).getEndOf("month").getDate(),
  // });

  const queryParams = {
    queryParams: {
      // startDate: dateRange.startDate?.getValue(),
      // endDate: dateRange.endDate?.getValue(),
      pageTake: pagination.pageSize,
      pageStart: pagination.pageIndex * pagination.pageSize,
      sortColumn: sorting.column,
      sortDirection: sorting.direction,
      searchQuery: useDebounce(filters.queryString, 500),
    },
  };

  const stockColumns = useStockColumns();

  return (
    // <TableFilters filters={filters} setFilters={setFilters} />
    <DataTable
      columns={stockColumns}
      isDataLoading={isLoading}
      data={stocks?.data}
      setPagination={setPagination}
      setSorting={setSorting}
      pagination={pagination}
      sorting={sorting}
      totalResults={stocks?.total}
      petition={useFetchStocks}
    />
  );
}
