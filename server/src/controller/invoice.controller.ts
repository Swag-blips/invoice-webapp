import { Request, Response } from "express";
import User from "../models/user.model";
import Invoice from "../models/invoice.model";
import mongoose from "mongoose";

export const createInvoice = async (req: Request, res: Response) => {
  const {
    invoiceId,
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
    itemList,
  } = req.body;
  const userId = req.params.id;

  try {
    const user = await User.findOne({
      clerkId: userId,
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const invoice = new Invoice({
      invoiceId,
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
      itemList,
    });
    user?.invoices.push(invoice._id as mongoose.Types.ObjectId);

    await Promise.all([user.save(), invoice.save()]);

    res.status(201).json({ message: "Invoice successfully created" });
    return;
  } catch (error) {
    console.log(`error at create invoice controller ${error}`);
    res.status(500).json({ message: "Internal server Error" });
  }
};
