import supertest, { Response } from "supertest";
import app from "../app";
import { projectDescription } from "../utils/project-description";
import { projectDescriptionTypeConIndex } from "../types/types";
import Note from "../schemas/notes.schema";
import { notasIniciales } from "../utils/para-tests";
import mongoose from "mongoose";
import { mongoUriTest } from "../tests/config-test";
const api = supertest(app);

beforeAll(() =>
  mongoose.connect(mongoUriTest).catch((error) => console.log(error.message))
);

describe("GET /", () => {
  test("retorna status 200 y un json", async () => {
    await api
      .get("/")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("retorna descripcion del proyecto", async () => {
    const res = await api.get("/");

    const body: projectDescriptionTypeConIndex =
      res.body as projectDescriptionTypeConIndex;

    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        expect(body[key]).toBe(projectDescription[key]);
      }
    }
  });

  const cantPropiedades = Object.keys(projectDescription).length;

  test(`retorna ${cantPropiedades} propiedades`, async () => {
    const res: Response = await api.get("/");

    const body: projectDescriptionTypeConIndex =
      res.body as projectDescriptionTypeConIndex;

    expect(Object.keys(body).length).toEqual(
      Object.keys(projectDescription).length
    );
  });
});

describe("GET /api/notes", () => {
  test("deberia retornar status 200 y un json", async () => {
    await api
      .get("/api/notes")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test(`deberia retornar ${notasIniciales.length} notas`, async () => {
    await Note.deleteMany({});

    for (let i = 0; i < notasIniciales.length; i++) {
      const nota = notasIniciales[i];

      const nuevaNota = new Note(nota);
      await nuevaNota.save();
    }

    const res = await api.get("/api/notes");

    expect(res.body).toHaveLength(notasIniciales.length);
  });
});

afterAll(() => {
  mongoose.connection.close().catch(() => console.log("conexion cerrada"));
});
