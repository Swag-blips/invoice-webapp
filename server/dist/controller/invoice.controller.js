"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAsDraft = exports.markAsPaid = exports.deleteInvoice = exports.editInvoice = exports.getInvoice = exports.getInvoices = exports.createInvoice = void 0;
const invoice_model_1 = __importDefault(require("../models/invoice.model"));
const util_1 = __importDefault(require("../utils/util"));
const createInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderStreetAddress, senderCity, senderPostCode, senderCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientPostCode, clientCountry, projectDescription, startDate, selectedOption, itemFields, } = req.body;
    const userId = req.params.userId;
    try {
        const invoice = new invoice_model_1.default({
            userId,
            invoiceId: (0, util_1.default)(),
            senderStreetAddress,
            senderCity,
            senderPostCode,
            senderCountry,
            clientName,
            clientEmail,
            clientStreetAddress,
            clientCity,
            clientPostCode,
            clientCountry,
            projectDescription,
            startDate,
            selectedOption,
            itemFields,
            status: "pending",
        });
        yield invoice.save();
        res.status(201).json(invoice);
        return;
    }
    catch (error) {
        console.log(`error at create invoice controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.createInvoice = createInvoice;
const getInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.userId;
    try {
        const invoices = yield invoice_model_1.default.find({
            userId: userId,
        });
        if (!invoices.length) {
            res.status(404).json({ error: "invoices not found" });
            return;
        }
        res.status(200).json(invoices);
        return;
    }
    catch (error) {
        console.log(`error at getInvoices controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.getInvoices = getInvoices;
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let invoiceId = req.params.invoiceId;
    try {
        let invoice = yield invoice_model_1.default.findOne({
            invoiceId,
        });
        if (!invoice) {
            res.status(404).json({ error: "Invoice not found" });
            return;
        }
        res.status(200).json(invoice);
        return;
    }
    catch (error) {
        console.log(`error at getInvoice controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.getInvoice = getInvoice;
const editInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderStreetAddress, senderCity, senderPostCode, senderCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientPostCode, clientCountry, projectDescription, startDate, selectedOption, itemFields, } = req.body;
    let invoiceId = req.params.invoiceId;
    try {
        let invoice = yield invoice_model_1.default.findOne({ invoiceId });
        if (!invoice) {
            res.status(404).json({ error: "Invoice not found" });
            return;
        }
        invoice.senderStreetAddress =
            senderStreetAddress || (invoice === null || invoice === void 0 ? void 0 : invoice.senderStreetAddress);
        invoice.senderCity = senderCity || invoice.senderCity;
        invoice.senderPostCode = senderPostCode || invoice.senderPostCode;
        invoice.senderCountry = senderCountry || invoice.senderCountry;
        invoice.clientName = clientName || invoice.clientName;
        invoice.clientEmail = clientEmail || invoice.clientEmail;
        invoice.clientStreetAddress =
            clientStreetAddress || invoice.clientStreetAddress;
        invoice.clientCity = clientCity || invoice.clientCity;
        invoice.clientPostCode = clientPostCode || invoice.clientPostCode;
        invoice.clientCountry = clientCountry || invoice.clientCountry;
        invoice.projectDescription =
            projectDescription || invoice.projectDescription;
        invoice.startDate = startDate || invoice.startDate;
        invoice.selectedOption = selectedOption || invoice.selectedOption;
        invoice.itemFields = itemFields || invoice.itemFields;
        if (invoice.status === "draft") {
            invoice.status = "pending";
        }
        yield invoice.save();
        res.status(201).json({ message: "Invoice successfully edited" });
        return;
    }
    catch (error) {
        console.log(`error at edit invoice controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.editInvoice = editInvoice;
const deleteInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoiceId = req.params.invoiceId;
    try {
        yield invoice_model_1.default.findOneAndDelete({ invoiceId });
        res.status(200).json({ message: "Invoice successfully deleted" });
        return;
    }
    catch (error) {
        console.log(`error at delete invoice controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.deleteInvoice = deleteInvoice;
const markAsPaid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoiceId = req.params.invoiceId;
    try {
        const invoice = yield invoice_model_1.default.findOne({
            invoiceId,
        });
        if (!invoice) {
            res.status(404).json({ error: "Invoice not found" });
            return;
        }
        if (invoice.status === "paid") {
            res.status(400).json({ error: "Invoice status is already paid" });
            return;
        }
        invoice.status = "paid";
        yield invoice.save();
        res.status(200).json({ message: "status successfully updated" });
        return;
    }
    catch (error) {
        console.log(`error at markAsPaid controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.markAsPaid = markAsPaid;
const saveAsDraft = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const { senderStreetAddress, senderCity, senderPostCode, senderCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientPostCode, clientCountry, projectDescription, startDate, selectedOption, itemFields, } = req.body;
        const invoice = new invoice_model_1.default({
            userId,
            invoiceId: (0, util_1.default)(),
            senderStreetAddress: senderStreetAddress || "",
            senderCity: senderCity || "",
            senderPostCode: senderPostCode || "",
            senderCountry: senderCountry || "",
            clientName: clientName || "",
            clientEmail: clientEmail || "",
            clientStreetAddress: clientStreetAddress || "",
            clientCity: clientCity || "",
            clientPostCode: clientPostCode || "",
            clientCountry: clientCountry || "",
            projectDescription: projectDescription || "",
            startDate: startDate || "",
            selectedOption: selectedOption || "",
            itemFields: itemFields || [],
            status: "draft",
        });
        yield invoice.save();
        res.status(200).json({ message: "Draft created" });
    }
    catch (error) {
        console.log(`error at save draft controller ${error}`);
        res.status(500).json({ message: "Internal server Error" });
    }
});
exports.saveAsDraft = saveAsDraft;
