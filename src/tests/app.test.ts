import { Response } from "supertest";
import { projectDescription } from "../utils/project-description";
import { NotaGuardada, projectDescriptionTypeConIndex } from "../types/types";
import * as hlp from "./helpers/utils";
import { dbConexion, dbConexionClose } from "./helpers/db-conexion";
import { api } from "./helpers/supertest";

beforeAll(() => dbConexion());

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

  test(`retorna ${hlp.cantPropiedades} propiedades`, async () => {
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

  test(`deberia retornar ${hlp.notasIniciales.length} notas`, async () => {
    await hlp.deleteAllNotes();

    await hlp.insertarNotasIniciales();

    const res = await api.get("/api/notes");

    expect(res.body).toHaveLength(hlp.notasIniciales.length);
  });
});

describe("POST /api/notes", () => {
  test("retorna status 200 y un json", async () => {
    await api
      .post("/api/notes")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test(`devuelve ${
    Object.keys(hlp.notaGuardada).length
  } propiedades`, async () => {
    const res = await api.post("/api/notes").send(hlp.notaDeRequest);

    const body: NotaGuardada = res.body as NotaGuardada;

    expect(Object.keys(body).length).toEqual(
      Object.keys(hlp.notaGuardada).length
    );
  });

  test("retorna _id, date, content e important", async () => {
    const res = await api.post("/api/notes").send(hlp.notaDeRequest);

    const body: NotaGuardada = res.body as NotaGuardada;

    expect(body._id).toBeDefined();
    expect(body.date).toBeDefined();
    expect(body.content).toBeDefined();
    expect(body.important).toBeDefined();
  });

  test("prueba si la nueva nota se guardo", async () => {
    await hlp.deleteAllNotes();

    await hlp.insertarNotasIniciales();

    await api.post("/api/notes").send(hlp.notaDeRequest);

    const res = await api.get("/api/notes");

    expect(res.body).toHaveLength(hlp.notasIniciales.length + 1);
  });
});

// DELETE /api/note/:id

// PATCH /api/note/:id

afterAll(() => {
  dbConexionClose();
});
