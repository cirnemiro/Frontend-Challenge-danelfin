import { ApiClient } from "../ApiClient";
import { z } from "zod";
import { QueryParams, StocksDetails } from "../queries/useFetchStocks";
import { InfiniteQueryPageParamsOptions } from "@tanstack/react-query";

const stockSchema = z.object({
  data: z.array(
    z.object({
      alphaHalfYear: z.string(),
      alphaMonth: z.string(),
      alphaQuarter: z.string(),
      alphaWeek: z.string(),
      alphaYear: z.string(),
      alphaYtd: z.string(),
      company: z.string(),
      country: z.string(),
      id: z.number(),
      isETF: z.boolean(),
      name: z.string(),
      perfHalfYear: z.string(),
      perfMonth: z.string(),
      perfQuarter: z.string(),
      perfWeek: z.string(),
      perfYear: z.string(),
      perfYtd: z.string(),
      risk: z.string(),
      score: z.object({
        fundamental: z.object({
          change: z.string(),
          value: z.string(),
        }),
        general: z.object({
          change: z.string(),
          value: z.string(),
        }),
        risk: z.object({
          change: z.string(),
          value: z.string(),
        }),
        sentiment: z.object({
          change: z.string(),
          value: z.string(),
        }),
        technical: z.object({
          change: z.string(),
          value: z.string(),
        }),
      }),
      shortName: z.string(),
      slug: z.string(),
    })
  ),
  limit: z.number(),
  offset: z.number(),
  order_by: z.string().nullable(),
  order_dir: z.enum(["asc", "desc"]),
  total: z.number(),
});

export const StocksRepository = {
  getStocks(params: StocksDetails.Variables) {
    return ApiClient.get<StocksDetails.Response>(
      "/stocks",
      { params },
      stockSchema
    );
  },
};
