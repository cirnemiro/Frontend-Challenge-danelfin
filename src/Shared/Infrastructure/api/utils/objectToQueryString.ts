import { isEmpty } from "lodash";
import qs from "query-string";
import { GenericObject } from "./genericObject";

export const objectToQueryString = (obj: GenericObject) => {
  if (isEmpty(obj)) return "";

  const newQsValue = qs.stringify(obj, {
    arrayFormat: "bracket",
    skipEmptyString: true,
    skipNull: true,
  });

  return newQsValue.length ? `?${newQsValue}` : "";
};
