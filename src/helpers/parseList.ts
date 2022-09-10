export const parseList = (list: string[]) => {
  const newList = [];
  for (let item in list) {
    newList.push(item.trim());
  }
  return list;
};
