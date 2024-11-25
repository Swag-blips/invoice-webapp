import express from "express";
import { createInvoice } from "../controller/invoice.controller";
import validateInvoice from "../middleware/validateInvoice";
import invoiceSchema from "../schema/invoice.schema";

const router = express.Router();

router.post("/:id", validateInvoice(invoiceSchema), createInvoice);

export default router;
