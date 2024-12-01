"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoice_controller_1 = require("../controller/invoice.controller");
const validateInvoice_1 = __importDefault(require("../middleware/validateInvoice"));
const invoice_schema_1 = __importDefault(require("../schema/invoice.schema"));
const express_2 = require("@clerk/express");
const router = express_1.default.Router();
router.post("/:userId", (0, express_2.requireAuth)(), (0, validateInvoice_1.default)(invoice_schema_1.default), invoice_controller_1.createInvoice);
router.put("/:invoiceId", (0, validateInvoice_1.default)(invoice_schema_1.default), invoice_controller_1.editInvoice);
router.get("/:userId", (0, express_2.requireAuth)(), invoice_controller_1.getInvoices);
router.get("/getInvoice/:invoiceId", (0, express_2.requireAuth)(), invoice_controller_1.getInvoice);
router.delete("/:invoiceId", (0, express_2.requireAuth)(), invoice_controller_1.deleteInvoice);
router.put("/mark/:invoiceId", (0, express_2.requireAuth)(), invoice_controller_1.markAsPaid);
router.post("/draft/:userId", (0, express_2.requireAuth)(), invoice_controller_1.saveAsDraft);
exports.default = router;
