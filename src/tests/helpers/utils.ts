import Note from "../../schemas/notes.schema";
import { NotaGuardada, NotaRequest } from "../../types/types";
import { projectDescription } from "../../utils/project-description";
import { api } from "./supertest";

const notasIniciales: NotaRequest[] = [
  {
    content: "Que bueno es programar.",
    important: false,
  },
  {
    content: "Necesito encontrar mas tiempo para estudiar programacion.",
    important: true,
  },
];

const cantPropiedades = Object.keys(projectDescription).length;

const getAllNotes = async () => await api.get("/api/notes");

const deleteAllNotes = async () => await Note.deleteMany({});

const eliminarNotaPorId = async (id: string) => await Note.deleteOne({ id });

const insertarNotasIniciales = async () => {
  for (let i = 0; i < notasIniciales.length; i++) {
    const nota = notasIniciales[i];

    const nuevaNota = new Note(nota);
    await nuevaNota.save();
  }
};

const enviarNotaAGuardar = async (notaDeRequest: NotaRequest) =>
  await api.post("/api/notes").send(notaDeRequest);

const timeStamps = new Date();

const notaDeRequest: NotaRequest = {
  content: "mejorando en typescript",
  important: true,
};

const notaGuardada: NotaGuardada = {
  _id: "41b28a0d-bcfc-4f23-80f9-88eadbe0e6c5",
  content: notaDeRequest.content,
  date: timeStamps,
  important: notaDeRequest.important,
};

const cantPropiedadesNotaGuardada = Object.keys(notaGuardada).length;

const guardarNota = async (notaDeRequest: NotaRequest) => {
  const nuevaNota = new Note({ ...notaDeRequest, date: new Date() });
  return await nuevaNota.save({ timestamps: false });
};

const getNotaPorId = async (id: unknown): Promise<NotaGuardada | null> =>
  await Note.findById(id);

export {
  notasIniciales,
  cantPropiedades,
  deleteAllNotes,
  insertarNotasIniciales,
  notaDeRequest,
  timeStamps,
  notaGuardada,
  getAllNotes,
  cantPropiedadesNotaGuardada,
  enviarNotaAGuardar,
  eliminarNotaPorId,
  guardarNota,
  getNotaPorId,
};
