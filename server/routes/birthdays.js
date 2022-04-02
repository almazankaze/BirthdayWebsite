import express from "express";

import {
  createBirthday,
  getBirthday,
  getBirthdays,
  addPost,
  deletePost,
  updatePost,
  removeBirthday,
} from "../controllers/birthdays.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", auth, getBirthdays);
router.get("/wish/:id", getBirthday);
router.post("/create", auth, createBirthday);
router.delete("/wish/:id", auth, removeBirthday);
router.patch("/:id", auth, addPost);
router.delete("/:id/post/:post_id", auth, deletePost);
router.patch("/:id/post/:post_id", auth, updatePost);

export default router;
