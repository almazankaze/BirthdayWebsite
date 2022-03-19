import express from "express";

import {
  getBirthdays,
  getOneBirthday,
  createBirthday,
  updateBirthday,
  addPost,
  deleteBirthday,
  deletePost,
} from "../controllers/birthdays.js";

const router = express.Router();

router.get("/", getBirthdays);
router.get("/:id", getOneBirthday);
router.post("/", createBirthday);
router.patch("/edit/:id", updateBirthday);
router.patch("/:id", addPost);
router.delete("/:id", deleteBirthday);
router.delete("/:id/post/:postId", deletePost);

export default router;
