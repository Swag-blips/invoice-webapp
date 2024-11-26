import mongoose, { Document } from "mongoose";

export interface Invoice extends Document {
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
  invoices: Array<mongoose.Types.ObjectId>;
}
