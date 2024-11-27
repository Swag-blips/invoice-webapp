import { ItemFields } from "../types";

const generateTotal = (itemDetails: ItemFields[]) => {
  console.log(itemDetails);

  let finalVal = itemDetails.reduce(
    (acc: any, item: any) => item.total + acc,
    0
  );

  return finalVal;
};

export default generateTotal;
