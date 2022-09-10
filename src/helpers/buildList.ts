import { parseList } from "./parseList";

export const buildList = (value: string) => {
  const valueList = value.split(",");
  return parseList(valueList);
};
