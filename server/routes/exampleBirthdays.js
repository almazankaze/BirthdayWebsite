import express from "express";

import { getExamples, createExample } from "../controllers/exampleBirthdays.js";

const exampleRouter = express.Router();

exampleRouter.get("/", getExamples);
exampleRouter.post("/", createExample);

export default exampleRouter;
