import { ColumnDef } from "@tanstack/react-table";
import { DianaBuy1 } from "../../../resources-for-pixel-perfect/RowTable/AnimaPackage-React-Tailwind/src/icons/DianaBuy1";
import { IcoCheckVerde } from "../../../resources-for-pixel-perfect/RowTable/AnimaPackage-React-Tailwind/src/icons/IcoCheckVerde";
import ScoreIconCell from "@/components/ReactTable/_components/ScoreIconCell";
import PercentageCell from "@/components/ReactTable/_components/PercentageCell";
import CountryFlagCell from "@/components/ReactTable/_components/CountryFlagCell";

type tableDataType = any;

export const useStockColumns = (): ColumnDef<tableDataType>[] => {
  // const { t } = useTranslations();

  const commonColumns: ColumnDef<tableDataType>[] = [
    {
      accessorKey: "company",
      header: "Company",
      cell: ({ row }) => {
        return (
          <div className="flex flex-col min-w-[230px] w-[230px] h-[62px] items-start justify-center p-1 relative bg-white">
            <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-blue-700  text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                {row.original?.name ?? "N/A"}
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <DianaBuy1 className="" />
                <IcoCheckVerde className="" />
              </div>
            </div>

            <p className="self-stretch relative text-left [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-4">
              {row.original?.company ?? "N/A"}
            </p>
          </div>
        );
      },
      enableSorting: true,
    },

    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => {
        return <CountryFlagCell code={row.original?.country} />;
      },
    },
    {
      header: "Fundamental",
      cell: ({ row }) => {
        return (
          <ScoreIconCell value={row.original?.score?.fundamental?.value} />
        );
      },
    },
    {
      header: "Technical",
      cell: ({ row }) => {
        return <ScoreIconCell value={row.original?.score?.technical?.value} />;
      },
    },
    {
      header: "Sentiment",
      cell: ({ row }) => {
        return <ScoreIconCell value={row.original?.score?.sentiment?.value} />;
      },
      enableSorting: false,
    },
    {
      header: "Low risk",
      cell: ({ row }) => {
        return <ScoreIconCell value={row.original?.score?.risk?.value} />;
      },
    },
    {
      accessorKey: "perfYtd",
      header: "Perf YTD",
      cell: ({ row }) => {
        return <PercentageCell value={row.original?.perfYtd} />;
      },
      enableSorting: true,
    },
  ];
  return commonColumns;
};
