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
      itemName: { type: String, required: true },
      qty: { type: Number, min: 1, required: true },
      price: { type: Number, min: 1, required: true },
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
