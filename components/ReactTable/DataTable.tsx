import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  Header,
  PaginationState,
  RowData,
  useReactTable,
} from "@tanstack/react-table";
import { Dispatch, Fragment, SetStateAction, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data?: TData[];
  pagination?: PaginationState;
  setPagination?: Dispatch<SetStateAction<PaginationState>>;
  sorting?: CustomSortingState<TValue>;
  setSorting?: Dispatch<SetStateAction<CustomSortingState<TValue>>>;
  totalResults?: number;
  isDataLoading?: boolean;
  setResultsPerPage?: Dispatch<SetStateAction<number>>;
  renderSubComponent?: (row: any) => React.ReactNode;
  title?: string | undefined;
  onExpandFn?: (row: any) => void;
  petition?: any;
  rowAction?: (row: RowData) => void;
}

export type CustomSortingState<TValue> = {
  column: TValue;
  direction: "desc" | "asc";
};

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination,
  setPagination,
  sorting,
  setSorting,
  totalResults = data?.length,
  isDataLoading,
  renderSubComponent,
  onExpandFn,
  rowAction,
}: DataTableProps<TData, TValue>) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const tableData = useMemo(
    () => (isDataLoading ? Array(5).fill({}) : data),
    [data, isDataLoading]
  );

  const tableColumns = useMemo(
    () =>
      isDataLoading
        ? columns.map((column) => ({
            ...column,
            cell: () => <div>loading</div>,
          }))
        : columns,
    [columns, isDataLoading]
  );

  const table = useReactTable({
    data: tableData!,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    pageCount:
      totalResults && pagination
        ? Math.ceil(totalResults / pagination.pageSize)
        : data?.length, //TODO calculate this
    state: {
      pagination,
      expanded: { [expandedRow!]: true },
    },
  });

  const handleSorting = (header: Header<TData, unknown>) => {
    setSorting!({
      column: header?.id as TValue,
      direction:
        sorting?.column === header?.id
          ? sorting?.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const options = [
    <option key={10} value={10}>
      10
    </option>,
    <option key={25} value={25}>
      25
    </option>,

    <option key={50} value={50}>
      50
    </option>,
    <option key={100} value={100}>
      100
    </option>,
    <option key={200} value={200}>
      200
    </option>,
  ];

  const breakingRows = 25;

  return (
    <div
      className={`relative flex flex-col`}
      style={{
        paddingBottom: table.getRowModel().rows?.length ? "0px" : "80px",
      }}
    >
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="!p-4">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={""}
                        onClick={() => {
                          header.column.getCanSort() && handleSorting(header);
                        }}
                      >
                        <p className="text-content-text-subtle">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </p>
                        {header.column.getCanSort() ? (
                          header.id === sorting?.column ? (
                            sorting?.direction === "asc" ? (
                              <div>asc</div>
                            ) : (
                              <div>desc</div>
                            )
                          ) : (
                            <div className="flex flex-col">
                              <div>icon</div>
                              <div>icon</div>
                            </div>
                          )
                        ) : null}
                      </div>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={rowAction ? () => rowAction(row.original) : () => {}}
                  className={rowAction && "cursor-pointer"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {row.getIsExpanded() && renderSubComponent ? (
                  <TableRow>
                    <TableCell colSpan={columns.length}>
                      {renderSubComponent(row)}
                    </TableCell>
                  </TableRow>
                ) : null}
              </Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <p>{'t("common:no-results-found")'}</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex w-full items-center justify-between rounded-b-lg border-b-xs border-border-subtle bg-background-neutral px-3 py-1">
        <p>
          {'t("common:total-rows")'}: {totalResults}
        </p>
        {pagination && table.getPageCount() > 0 ? (
          <div className="flex items-center gap-3">
            <p>
              {'t("common:page-label")'} {pagination.pageIndex + 1} -{" "}
              {table.getPageCount()}
            </p>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </div>
        ) : null}
      </div>
      {/* <Modal setIsOpen={setCsvModal} isOpen={csvModal}>
        <DataExportModal
          title={title ?? t("common:table-default-title")}
          tableColumns={tableColumns}
          tableData={tableData!}
        />
      </Modal> */}
    </div>
  );
}
