import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { StocksRepository } from "../respositories/stocks";
import { Api } from "../api";

interface Score {
  fundamental: {
    change: string;
    value: string;
  };
}

interface Stock {
  alphaHalfYear: string;
  alphaMonth: string;
  alphaQuarter: string;
  company: string;
  country: string;
  id: number;
  isETF: boolean;
  name: string;
  perfHalfYear: string;
  perfMonth: string;
  perfQuarter: string;
  risk: string;
  score: Score;
  shortName: string;
  slug: string;
}

interface StocksResponse {
  data: Stock[];
  limit: number;
  offset: number;
  order_by: string | null;
  order_dir: "asc" | "desc";
  total: number;
}

export interface QueryParams {
  limit?: number;
  offset?: number;
  order_by?: string;
  order_dir?: "asc" | "desc";
  [key: string]: string | number | undefined;
}

export namespace StocksDetails {
  export type Response = StocksResponse;
  export type Variables = QueryParams;
  export type Error = Api.Error;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = (params: StocksDetails.Variables) => [
  "stocks",
  JSON.stringify(params),
];

const queryFetcher =
  (params: StocksDetails.Variables) =>
  async (): Promise<StocksDetails.Response> => {
    const response = await StocksRepository.getStocks(params);
    if (response && "error" in response) {
      throw response.error;
    }
    return response;
  };

export const useFetchStocks = (
  params: StocksDetails.Variables,
  options?: StocksDetails.Options
) => {
  const { data, ...rest } = useQuery<
    StocksDetails.Response,
    StocksDetails.Error
  >({
    queryKey: createKey(params),
    queryFn: queryFetcher(params),
    refetchOnWindowFocus: false,
    ...options,
  });
  console.log(data, rest);

  return { data, ...rest };
};
