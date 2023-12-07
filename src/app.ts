import express from "express";
import { projectDescription } from "./utils/project-description";
import notesRouter from "./routers/notes.router";

const app = express();

app.use(express.json());

app.use("/api/notes", notesRouter);

app.get("/", (_req, res) => res.status(200).json(projectDescription));

export default app;
