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

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBirthdays);
router.get("/:id", getOneBirthday);
router.post("/", auth, createBirthday);
router.patch("/edit/:id", auth, updateBirthday);
router.patch("/:id", auth, addPost);
router.delete("/:id", auth, deleteBirthday);
router.delete("/:id/post/:postId", auth, deletePost);

export default router;
