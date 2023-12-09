import { Router, Response, Request } from "express";
import Note from "../schemas/notes.schema";
import { NotaActualizadaRequest, NotaRequest } from "../types/types";
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

    if (!nota.content || !nota.important)
      throw new Error("Faltan propiedades.");

    const nuevaNota = new Note({ ...nota, date: new Date() });

    const notaGuardada = await nuevaNota.save({ timestamps: false });

    res.status(200).json(notaGuardada);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(501).json({ mensaje: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const notaEncontrada = await Note.findById(req.params.id);

  if (!notaEncontrada)
    return res.status(404).json({ mensaje: "La nota no existe" });

  res.status(200).json(notaEncontrada);
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

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const notaParaActualizar: NotaActualizadaRequest =
      req.body as NotaActualizadaRequest;

    // aca deberia ir una validacion con una libreria como zod
    const propiedadesActualizables: string[] = ["content", "important"];
    const propiedadesRequest = Object.keys(notaParaActualizar);
    let existePropiedad: boolean = true;

    propiedadesRequest.forEach((propiedad) => {
      if (!propiedadesActualizables.includes(propiedad))
        existePropiedad = false;
    });

    if (!existePropiedad || propiedadesRequest.length === 0)
      return res
        .status(400)
        .json({ mensaje: "El formato de la nota es invalido." });
    // ------------------------------------------------------------

    const notaActualizada = await Note.findByIdAndUpdate(
      req.params.id,
      notaParaActualizar,
      { new: true }
    );

    res.status(200).json(notaActualizada);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(501).json({ mensaje: error.message });
  }
});

export default router;
