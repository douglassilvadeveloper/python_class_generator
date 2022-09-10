export const parseList = (list: string[]) => {
  const newList = [];
  for (let i in list) {
    newList.push(list[i].trim());
  }
  return newList;
};
