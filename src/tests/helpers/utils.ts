import Note from "../../schemas/notes.schema";
import { NotaGuardada, NotaRequest } from "../../types/types";
import { projectDescription } from "../../utils/project-description";

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

const deleteAllNotes = async () => await Note.deleteMany({});

const insertarNotasIniciales = async () => {
  for (let i = 0; i < notasIniciales.length; i++) {
    const nota = notasIniciales[i];

    const nuevaNota = new Note(nota);
    await nuevaNota.save();
  }
};

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

export {
  notasIniciales,
  cantPropiedades,
  deleteAllNotes,
  insertarNotasIniciales,
  notaDeRequest,
  timeStamps,
  notaGuardada
};
