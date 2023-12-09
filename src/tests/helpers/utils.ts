import Note from "../../schemas/notes.schema";
import {
  NotaGuardada,
  NotaRequest,
  NotaRequestInvalida,
} from "../../types/types";
import { projectDescription } from "../../utils/project-description";
import { api } from "./supertest";

export const notasIniciales: NotaRequest[] = [
  {
    content: "Que bueno es programar.",
    important: false,
  },
  {
    content: "Necesito encontrar mas tiempo para estudiar programacion.",
    important: true,
  },
];

export const cantPropiedades = Object.keys(projectDescription).length;

export const getAllNotes = async () => await api.get("/api/notes");

export const deleteAllNotes = async () => await Note.deleteMany({});

export const eliminarNotaPorId = async (id: string) =>
  await Note.deleteOne({ id });

export const insertarNotasIniciales = async () => {
  for (let i = 0; i < notasIniciales.length; i++) {
    const nota = notasIniciales[i];

    const nuevaNota = new Note(nota);
    await nuevaNota.save();
  }
};

export const enviarNotaAGuardar = async (notaDeRequest: NotaRequest) =>
  await api.post("/api/notes").send(notaDeRequest);

export const enviarNotaInvalidaAGuardar = async (
  notaDeRequest: NotaRequestInvalida
) => await api.post("/api/notes").send(notaDeRequest);

export const timeStamps = new Date();

export const notaDeRequest: NotaRequest = {
  content: "mejorando en typescript",
  important: true,
};

export const notaGuardada: NotaGuardada = {
  _id: "41b28a0d-bcfc-4f23-80f9-88eadbe0e6c5",
  content: notaDeRequest.content,
  date: timeStamps,
  important: notaDeRequest.important,
};

export const cantPropiedadesNotaGuardada = Object.keys(notaGuardada).length;

export const guardarNota = async (notaDeRequest: NotaRequest) => {
  const nuevaNota = new Note({ ...notaDeRequest, date: new Date() });
  return await nuevaNota.save({ timestamps: false });
};

export const getNotaPorId = async (id: unknown): Promise<NotaGuardada | null> =>
  await Note.findById(id);

export const notasDeRequestInvalidas: NotaRequestInvalida[] = [
  {
    content: "se envia solo el contenido",
  },
  {
    important: false,
  },
];

export const notaContent = "Este es el contenido de la nota para actualizar.";
