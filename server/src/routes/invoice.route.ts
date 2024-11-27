import express from "express";
import {
  createInvoice,
  getInvoice,
  getInvoices,
} from "../controller/invoice.controller";
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
router.get("/:id", requireAuth(), getInvoices);
router.get("/getInvoice/:invoiceId", getInvoice);

export default router;
