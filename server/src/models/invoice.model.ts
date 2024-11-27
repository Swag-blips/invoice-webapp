import mongoose from "mongoose";
import { Invoice } from "../types/types";

const invoiceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  invoiceId: { type: String, required: true },
  senderStreetAddress: { type: String, required: true },
  senderCity: { type: String, required: true },
  senderPostCode: { type: String, required: true },
  senderCountry: { type: String, required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  clientStreetAddress: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientPostCode: { type: String, required: true },
  clientCountry: { type: String, required: true },
  projectDescription: { type: String, required: true },
  startDate: { type: Date, required: true },
  selectedOption: { type: String, required: true },
  itemFields: [
    {
      itemName: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true },
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
