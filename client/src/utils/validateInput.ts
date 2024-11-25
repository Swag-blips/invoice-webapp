import { BillFromErrors, ItemFields, ItemFieldsError } from "../types";

export const validate = (
  senderStreetAddress: string,
  senderCity: string,
  senderPostCode: string,
  senderCountry: string,
  clientName: string,
  clientEmail: string,
  clientStreetAddress: string,
  clientCity: string,
  clientPostCode: string,
  clientCountry: string,
  projectDescription: string,
  setErrors: (err: BillFromErrors) => void
) => {
  let errMessage = "cant be empty";
  let isValid = true;
  const newErrors = {
    senderStreetAddress: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    projectDescription: "",
  };

  if (!senderStreetAddress) {
    isValid = false;
    newErrors.senderStreetAddress = errMessage;
  }
  if (!senderCity) {
    isValid = false;
    newErrors.senderCity = errMessage;
  }
  if (!senderPostCode) {
    isValid = false;
    newErrors.senderPostCode = errMessage;
  }
  if (!senderPostCode) {
    isValid = false;
    newErrors.senderPostCode = errMessage;
  }
  if (!senderCountry) {
    isValid = false;
    newErrors.senderCountry = errMessage;
  }
  if (!clientName) {
    isValid = false;
    newErrors.clientName = errMessage;
  }
  if (!clientEmail) {
    isValid = false;
    newErrors.clientEmail = errMessage;
  }
  if (!clientStreetAddress) {
    isValid = false;
    newErrors.clientStreetAddress = errMessage;
  }
  if (!clientCity) {
    isValid = false;
    newErrors.clientCity = errMessage;
  }
  if (!clientPostCode) {
    isValid = false;
    newErrors.clientPostCode = errMessage;
  }
  if (!clientCountry) {
    isValid = false;
    newErrors.clientCountry = errMessage;
  }
  if (!projectDescription) {
    isValid = false;
    newErrors.projectDescription = errMessage;
  }

  setErrors(newErrors);
  return isValid;
};

export default validate;

export const validateItemFields = (
  itemFields: ItemFields[],
  setItemFieldsError: (itemfieldsError: ItemFieldsError[]) => void
) => {
  let itemFieldsError = [...itemFields] as ItemFieldsError[];

  let valid = true;

  for (let i = 0; i < itemFieldsError.length; i++) {
    if (itemFieldsError[i].itemName === "") {
      itemFields[i].itemNameCheck = "itemName is required";
      valid = false;
    } else {
      itemFieldsError[i].itemNameCheck = "";
      valid = true;
    }
    if (!itemFieldsError[i].price) {
      itemFields[i].itemPriceCheck = "invalid price";
      valid = false;
    } else {
      itemFieldsError[i].itemPriceCheck = "";
      valid = true;
    }
    if (!itemFieldsError[i].qty) {
      itemFields[i].itemQtyCheck = "invalid price";
      valid = false;
    } else {
      itemFieldsError[i].itemQtyCheck = "";
      valid = true;
    }
  }

  setItemFieldsError(itemFieldsError);
  console.log(itemFieldsError);
  return valid;
};
