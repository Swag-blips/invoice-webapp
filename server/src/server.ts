import express from "express";
import dotenv from "dotenv";
import connectMongodb from "./db/connectMongo";
import userRoutes from "./routes/user.route";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
  connectMongodb();
});
