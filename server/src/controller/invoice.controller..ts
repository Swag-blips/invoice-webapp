import { Request, Response } from "express";

const createInvoice = async (req: Request, res: Response) => {
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


  console.log()
};
