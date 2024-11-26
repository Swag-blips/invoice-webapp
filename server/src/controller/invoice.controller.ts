import { Request, Response } from "express";
import User from "../models/user.model";
import Invoice from "../models/invoice.model";
import mongoose from "mongoose";

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
  const userId = req.params.id;

  console.log(
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
    itemFields
  );
  res.status(201).json({ message: "received" });
};
