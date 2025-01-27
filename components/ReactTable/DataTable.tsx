"use client";
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
import Skeleton from "../Skeleton/Sekeleton";
import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { IconSquareArrowDown, IconSquareArrowUp } from "@tabler/icons-react";

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
  rowAction,
}: DataTableProps<TData, TValue>) {
  const tableData = useMemo(
    () => (isDataLoading ? Array(5).fill({}) : data),
    [data, isDataLoading]
  );

  const tableColumns = useMemo(
    () =>
      isDataLoading
        ? columns.map((column, index) => ({
            ...column,
            cell: () => (
              <div className={index === 0 ? "min-w-[220px]" : ""}>
                <Skeleton
                  height={"2.5rem"}
                  width={"100%"}
                  count={"1"}
                  circle={false}
                />
              </div>
            ),
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
        : data?.length,
    state: {
      pagination,
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

  return (
    <div className="relative flex flex-col w-full">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableHead
                    key={header.id}
                    className={`${
                      index === 0 ? "sticky left-0  z-10" : ""
                    } bg-slate-800`}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="m-auto max-w-max text-center">
                        <div
                          className={` text-white px-2 py-1 flex gap-4 justify-between items-center text-center m-auto ${
                            header.column.getCanSort() ? "cursor-pointer" : ""
                          }`}
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
                                <IconSquareArrowDown size={15} />
                              ) : (
                                <IconSquareArrowUp size={15} />
                              )
                            ) : (
                              <div className="flex flex-col">
                                <IconSquareArrowUp size={15} />
                                <IconSquareArrowDown size={15} />
                              </div>
                            )
                          ) : null}
                        </div>
                      </div>
                    )}
                  </TableHead>
                ))}
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
                    onClick={
                      rowAction ? () => rowAction(row.original) : () => {}
                    }
                    className={
                      rowAction
                        ? "cursor-pointer"
                        : "" + "bg-white border border-gray-500"
                    }
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <TableCell
                        key={cell.id}
                        className={`p-2 m-auto text-center ${
                          index === 0 ? "sticky left-0 bg-white z-10" : ""
                        }`}
                      >
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <p>no results</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
