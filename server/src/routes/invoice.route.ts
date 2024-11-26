import express from "express";
import { createInvoice } from "../controller/invoice.controller";
import validateInvoice from "../middleware/validateInvoice";
import invoiceSchema from "../schema/invoice.schema";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post(
  "/:id",
  requireAuth(),
  validateInvoice(invoiceSchema),
  createInvoice
);

export default router;
