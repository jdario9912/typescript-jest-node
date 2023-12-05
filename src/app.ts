import express from "express";
import { projectDescription } from "../utils/project-description";

const app = express();

app.get("/", (_req, res) => {
  return res.status(200).json(projectDescription);
});

export default app;
