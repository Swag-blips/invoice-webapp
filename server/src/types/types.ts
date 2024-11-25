import { Document } from "mongoose";

export interface Receipt extends Document {
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
  startDate: string;
  selectedOption: string;
  itemList: Items[];
}

interface Items {
  itemName: string;
  qty: number;
  price: number;
}

export interface User extends Document {
  clerkId: string;
  email: string;
  receipts: Array<any>;
}
