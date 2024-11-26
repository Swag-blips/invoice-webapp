import express from "express";
import dotenv from "dotenv";
import connectMongodb from "./db/connectMongo";
import userRoutes from "./routes/user.route";
import receiptRoutes from "./routes/invoice.route";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();
const app = express();
app.use(clerkMiddleware());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/invoices", receiptRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);

  connectMongodb();
});
