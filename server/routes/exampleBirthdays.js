import express from "express";

import {
  getExamples,
  createExample,
  getOneExample,
  addPost,
  deletePost,
  updatePost,
} from "../controllers/exampleBirthdays.js";

import auth from "../middleware/auth.js";

const exampleRouter = express.Router();

exampleRouter.get("/", getExamples);
exampleRouter.get("/:id", getOneExample);
exampleRouter.post("/", createExample);
exampleRouter.patch("/:id", auth, addPost);
exampleRouter.delete("/:id/post/:post_id", auth, deletePost);
exampleRouter.patch("/:id/post/:post_id", auth, updatePost);

export default exampleRouter;
