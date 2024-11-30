import mongoose from "mongoose";
import { Invoice } from "../types/types";

const invoiceSchema = new mongoose.Schema({
  userId: { type: String },
  invoiceId: { type: String },
  senderStreetAddress: { type: String },
  senderCity: { type: String },
  senderPostCode: { type: String },
  senderCountry: { type: String },
  clientName: { type: String },
  clientEmail: { type: String },
  clientStreetAddress: { type: String },
  clientCity: { type: String },
  clientPostCode: { type: String },
  clientCountry: { type: String },
  projectDescription: { type: String },
  startDate: { type: Date },
  selectedOption: { type: String },
  itemFields: [
    {
      itemName: { type: String },
      qty: { type: Number },
      price: { type: Number },
      total: { type: Number },
    },
  ],
  status: {
    type: String,
    enum: ["pending", "paid", "draft"],
    default: "pending",
  },
});

const Invoice = mongoose.model<Invoice>("Invoice", invoiceSchema);

export default Invoice;
