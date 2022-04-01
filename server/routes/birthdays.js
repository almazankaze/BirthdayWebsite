import express from "express";

import {
  createBirthday,
  getBirthday,
  getBirthdays,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/birthdays.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBirthdays);
router.get("/:id", getBirthday);
router.post("/create", auth, createBirthday);
router.patch("/:id", auth, addPost);
router.delete("/:id/post/:post_id", auth, deletePost);
router.patch("/:id/post/:post_id", auth, updatePost);

export default router;
