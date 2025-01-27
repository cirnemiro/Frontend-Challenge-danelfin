"use client";
import { ColumnDef } from "@tanstack/react-table";
import ScoreIconCell from "@/components/ReactTable/_components/ScoreIconCell";
import PercentageCell from "@/components/ReactTable/_components/PercentageCell";
import CountryFlagCell from "@/components/ReactTable/_components/CountryFlagCell";

type tableDataType = any;

export const useTopStockColumns = (): ColumnDef<tableDataType>[] => {
  const commonColumns: ColumnDef<tableDataType>[] = [
    {
      accessorKey: "company",
      header: "Company",
      cell: ({ row }) => {
        return (
          <div className="flex flex-col min-w-[230px] w-[230px] h-[62px] items-start justify-center p-1 relative bg-white">
            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-blue-700  text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                {row.original?.company} ({row.original?.name ?? "N/A"})
              </div>
            </div>
          </div>
        );
      },
      enableSorting: false,
    },

    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => {
        return <CountryFlagCell code={row.original?.country} />;
      },
      enableSorting: false,
    },
  ];
  return commonColumns;
};
