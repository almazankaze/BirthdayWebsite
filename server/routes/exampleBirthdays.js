import express from "express";

import {
  getExamples,
  createExample,
  getOneExample,
} from "../controllers/exampleBirthdays.js";

const exampleRouter = express.Router();

exampleRouter.get("/", getExamples);
exampleRouter.get("/:id", getOneExample);
exampleRouter.post("/", createExample);

export default exampleRouter;
