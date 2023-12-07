import { Router, Response, Request } from "express";
import Note from "../schemas/notes.schema";
import { NotaRequest } from "../types/types";
const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(501).json({ mensaje: "algo salio mal" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const nota: NotaRequest = req.body as NotaRequest;

  const nuevaNota = new Note({ ...nota, date: new Date() });

  const notaGuardada = await nuevaNota.save({timestamps: false});
  
  res.status(200).json(notaGuardada);
});

export default router;
