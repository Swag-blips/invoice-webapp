import mongoose from "mongoose";
import { User } from "../types/types";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  clerkId: { type: String, required: true, unique: true },
  invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
      ref: "Invoice",
    },
  ],
});

const User = mongoose.model<User>("User", userSchema);

export default User;
