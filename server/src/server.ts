import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectMongodb from "./db/connectMongo";
import receiptRoutes from "./routes/invoice.route";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://invoice-bay-eight.vercel.app"],
    credentials: true,
  })
);

app.use("/api/invoices", receiptRoutes);
app.get("/cronJob", (req: Request, res: Response) => {
  res.send("Hello cron job");
  return;
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);

  connectMongodb();
});
