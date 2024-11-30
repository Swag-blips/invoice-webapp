import { Request, Response } from "express";
import Invoice from "../models/invoice.model";
import generateInvoiceId from "../utils/util";

export const createInvoice = async (req: Request, res: Response) => {
  const {
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
  } = req.body;
  const userId = req.params.userId;

  try {
    const invoice = new Invoice({
      userId,
      invoiceId: generateInvoiceId(),
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

    await invoice.save();
    res.status(201).json(invoice);
    return;
  } catch (error) {
    console.log(`error at create invoice controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const getInvoices = async (req: Request, res: Response) => {
  let userId = req.params.userId;

  try {
    const invoices = await Invoice.find({
      userId: userId,
    });

    if (!invoices.length) {
      res.status(404).json({ error: "invoices not found" });
      return;
    }

    res.status(200).json(invoices);
    return;
  } catch (error) {
    console.log(`error at getInvoices controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const getInvoice = async (req: Request, res: Response) => {
  let invoiceId = req.params.invoiceId;

  try {
    let invoice = await Invoice.findOne({
      invoiceId,
    });

    if (!invoice) {
      res.status(404).json({ error: "Invoice not found" });
      return;
    }

    res.status(200).json(invoice);
    return;
  } catch (error) {
    console.log(`error at getInvoice controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const editInvoice = async (req: Request, res: Response) => {
  const {
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
  } = req.body;

  let invoiceId = req.params.invoiceId;
  try {
    let invoice = await Invoice.findOne({ invoiceId });

    if (!invoice) {
      res.status(404).json({ error: "Invoice not found" });
      return;
    }

    invoice.senderStreetAddress =
      senderStreetAddress || invoice?.senderStreetAddress;
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

    await invoice.save();
    res.status(201).json({ message: "Invoice successfully edited" });
    return;
  } catch (error) {
    console.log(`error at edit invoice controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  const invoiceId = req.params.invoiceId;

  try {
    await Invoice.findOneAndDelete({ invoiceId });
    res.status(200).json({ message: "Invoice successfully deleted" });
    return;
  } catch (error) {
    console.log(`error at delete invoice controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const markAsPaid = async (req: Request, res: Response) => {
  const invoiceId = req.params.invoiceId;

  try {
    const invoice = await Invoice.findOne({
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

    await invoice.save();

    res.status(200).json({ message: "status successfully updated" });
    return;
  } catch (error) {
    console.log(`error at markAsPaid controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const saveAsDraft = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const {
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
    } = req.body;

    const invoice = new Invoice({
      userId,
      invoiceId: generateInvoiceId(),
      senderStreetAddress: senderStreetAddress || "a",
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

    await invoice.save();

    res.status(200).json({ message: "Draft created" });
  } catch (error) {
    console.log(`error at save draft controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};
