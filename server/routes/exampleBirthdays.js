import express from "express";

import {
  getExamples,
  createExample,
  getOneExample,
  addPost,
} from "../controllers/exampleBirthdays.js";

const exampleRouter = express.Router();

exampleRouter.get("/", getExamples);
exampleRouter.get("/:id", getOneExample);
exampleRouter.post("/", createExample);
exampleRouter.patch("/:id", addPost);

export default exampleRouter;
