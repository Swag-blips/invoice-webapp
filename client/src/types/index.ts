export interface InvoicesType {
  _id: string;
  userId: string;
  invoiceId: string;
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  projectDescription: string;
  startDate: Date;
  selectedOption: string;
  itemFields: ItemFields[];
  status: string;
  error: string;
}

export interface ItemFields {
  [key: string | number]: string | number | null;

  itemName: string;
  qty: number | null;
  price: number | null;
  total: number ;
}

export interface ItemFieldsError extends ItemFields {
  [key: string | number]: string | number | null;

  itemNameCheck: string;
  itemPriceCheck: string;
  itemQtyCheck: string;
}

export interface FormErrors {
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  projectDescription: string;
}

export interface FormType {
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  projectDescription: string;
}

export const DEFAULT_STATE = {
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
