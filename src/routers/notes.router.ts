import { Router, Response } from "express";
import Note from "../schemas/notes.schema";
const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(501).json({ mensaje: "algo salio mal" });
  }
});

export default router;
