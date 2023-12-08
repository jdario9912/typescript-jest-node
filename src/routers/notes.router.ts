import { Router, Response, Request } from "express";
import Note from "../schemas/notes.schema";
import { NotaRequest } from "../types/types";
const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(501).json({ mensaje: error.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const nota: NotaRequest = req.body as NotaRequest;

    const nuevaNota = new Note({ ...nota, date: new Date() });

    const notaGuardada = await nuevaNota.save({ timestamps: false });

    res.status(200).json(notaGuardada);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(501).json({ mensaje: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Note.deleteOne({ _id: req.params.id });

    res.status(204).json(null);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(501).json({ mensaje: error.message });
  }
});

export default router;
