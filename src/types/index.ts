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

export interface InputFields {
  [key: string]: {};
  itemName: string;
  qty: number;
  price: number;
  total: number;
}
