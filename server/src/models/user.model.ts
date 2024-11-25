import mongoose, { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  email: string;
  receipts: Array<any>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  clerkId: { type: String, required: true, unique: true },
  receipts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
      ref: "Receipt",
    },
  ],
});

const User = mongoose.model<User>("User", userSchema);

export default User;
