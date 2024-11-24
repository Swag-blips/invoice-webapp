export interface InvoicesType {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Items[];
  total: number;
}

interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface ClientAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Items {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ItemFields {
  [key: string]: string | number | null;

  itemName: string;
  qty: number | null;
  price: number | null;
  total: number | null;
}

export interface BillFromErrors {
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
