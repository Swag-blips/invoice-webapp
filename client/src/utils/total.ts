const generateTotal = (itemDetails: any) => {
  console.log(itemDetails);

  let finalVal = itemDetails.reduce(
    (acc: any, item: any) => item.total + acc,
    0
  );

  return finalVal;
};

export default generateTotal;
