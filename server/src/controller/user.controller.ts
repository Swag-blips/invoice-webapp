import { Request, Response } from "express";
import User from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const { clerkId, email } = req.body;

  if (!clerkId || !email) {
    res.status(400).json({ error: "Email or Id is required" });
    return;
  }
  try {
    const user = await User.create({
      clerkId,
      email,
    });

    res.status(201).json({ message: "Account successfuly created", user });
    return;
  } catch (error: any) {
    console.log(`an error occurd in createUser controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
