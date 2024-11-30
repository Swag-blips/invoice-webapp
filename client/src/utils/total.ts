import { ItemFields } from "../types";

const generateTotal = (itemDetails: ItemFields[] | undefined) => {
  const finalVal = itemDetails?.reduce(
    (acc: number, item: ItemFields) => item.total + acc,
    0
  );

  return finalVal;
};

export default generateTotal;
