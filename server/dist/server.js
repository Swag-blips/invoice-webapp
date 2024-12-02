"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectMongo_1 = __importDefault(require("./db/connectMongo"));
const invoice_route_1 = __importDefault(require("./routes/invoice.route"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://invoice-bay-eight.vercel.app"],
    credentials: true,
}));
app.use("/api/invoices", invoice_route_1.default);
app.get("/cronJob", (req, res) => {
    res.send("Hello cron job");
    return;
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
    (0, connectMongo_1.default)();
});
