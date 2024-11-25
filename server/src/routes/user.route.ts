import express from "express";
import { createUser } from "../controller/user.controller";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/", createUser);

export default router;
