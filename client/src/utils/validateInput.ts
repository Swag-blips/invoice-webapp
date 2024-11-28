import { FormErrors, FormType, ItemFields, ItemFieldsError } from "../types";

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
  setErrors: (err: FormErrors) => void
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
  let itemFieldsError = itemFields.map((item) => ({
    ...item,
  })) as ItemFieldsError[];

  let valid = true;

  for (let i = 0; i < itemFieldsError.length; i++) {
    if (itemFieldsError[i].itemName === "") {
      itemFieldsError[i].itemNameCheck = "itemName is required";
      valid = false;
    } else {
      itemFieldsError[i].itemNameCheck = "";
    }
    if (!itemFieldsError[i].price) {
      console.log(itemFieldsError[i].price);
      itemFieldsError[i].itemPriceCheck = "invalid price";
      valid = false;
    } else {
      itemFieldsError[i].itemPriceCheck = "";
    }
    if (!itemFieldsError[i].qty) {
      itemFieldsError[i].itemQtyCheck = "invalid qty";
      valid = false;
    } else {
      itemFieldsError[i].itemQtyCheck = "";
    }
  }

  setItemFieldsError(itemFieldsError);
  return valid;
};

export const validateDateAndOption = (
  startDate: Date | null,
  option: string | null
) => {
  let isValid = true;

  if (!startDate || !option) {
    isValid = false;
  }

  return isValid;
};

export const handleValidator = (
  itemFields: ItemFields[],
  setItemFieldsError: (itemfieldsError: ItemFieldsError[]) => void,
  form: FormType,
  setErrors: (err: FormErrors) => void,
  startDate: Date | null,
  option: string | null
) => {
  let isValid = true;

  if (!validateItemFields(itemFields, setItemFieldsError)) {
    isValid = false;
  }
  if (
    !validate(
      form.senderStreetAddress,
      form.senderCity,
      form.senderPostCode,
      form.senderCountry,
      form.clientName,
      form.clientEmail,
      form.clientStreetAddress,
      form.clientCity,
      form.clientPostCode,
      form.clientCountry,
      form.projectDescription,
      setErrors
    )
  ) {
    isValid = false;
  }
  if (!validateDateAndOption(startDate, option)) {
    isValid = false;
  }

  return isValid;
};
