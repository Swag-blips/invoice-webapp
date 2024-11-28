import express from "express";
import {
  createInvoice,
  deleteInvoice,
  editInvoice,
  getInvoice,
  getInvoices,
} from "../controller/invoice.controller";
import validateInvoice from "../middleware/validateInvoice";
import invoiceSchema from "../schema/invoice.schema";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post(
  "/:userId",
  requireAuth(),
  validateInvoice(invoiceSchema),
  createInvoice
);
router.put("/:invoiceId", validateInvoice(invoiceSchema), editInvoice);
router.get("/:userId", requireAuth(), getInvoices);
router.get("/getInvoice/:invoiceId", requireAuth(), getInvoice);
router.delete("/:invoiceId", requireAuth(), deleteInvoice);

export default router;
