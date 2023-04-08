import express from "express";

import { signin, signup, googlesign } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/google_signin", googlesign);

export default router;
