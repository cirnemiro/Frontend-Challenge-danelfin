import { merge } from "lodash";
import { z, ZodSchema } from "zod";
import { GenericObject } from "./utils/genericObject";
import { objectToQueryString } from "./utils/objectToQueryString";

type Options = {
  headers?: Headers;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  responseType?:
    | "text"
    | "json"
    | "stream"
    | "blob"
    | "arrayBuffer"
    | "formData";
  params?: GenericObject;
};

type Headers = {
  [name: string]: string;
};

export namespace Api {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Error = any;
}

type Response<T> = {
  status: number;
  statusText: string;
  config: Options;
  data: T;
  headers: Headers;
  redirect: boolean;
  url: string;
  type: ResponseType;
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
};

export function createApiClient(baseURL: string, version: "v1" | "v2" | "") {
  function client<T>(
    endpoint: string,
    config: Options = {},
    method: string,
    schema?: ZodSchema<T>
  ): Promise<T | { error: z.ZodError<T>; data: null; schema: ZodSchema<T> }> {
    const response = { config } as Response<T>;
    const customHeaders: Headers = {
      "Access-Control-Allow-Origin": "*",
    };

    let url = `${baseURL}${version}${endpoint}`;
    let data = config.data;

    if (data && typeof data === "object" && typeof data.append !== "function") {
      data = JSON.stringify(data);
      customHeaders["content-type"] = "application/json";
    }

    if (config.params) {
      url += objectToQueryString(config.params);
    }

    return fetch(url, {
      method,
      credentials: "include",
      body: data,
      headers: merge(config.headers, customHeaders),
    }).then(async (res) => {
      response.data = await res.json();

      if (schema) {
        const validation = schema.safeParse(response.data);

        if (!validation.success) {
          return {
            schema,
            error: validation.error,
            data: null,
          };
        }
        return validation.data;
      }

      return response.data;
    });
  }

  client.get = <T>(url: string, config?: Options, schema?: ZodSchema<T>) =>
    client<T>(url, config, "GET", schema);

  return client;
}
