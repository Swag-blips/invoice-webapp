"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const invoiceSchema = new mongoose_1.default.Schema({
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
const Invoice = mongoose_1.default.model("Invoice", invoiceSchema);
exports.default = Invoice;
