import express from "express";

import { createBirthday } from "../controllers/birthdays.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createBirthday);

export default router;
