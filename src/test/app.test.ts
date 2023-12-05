import supertest, { Response } from "supertest";
import app from "../app";
import { projectDescription } from "../utils/project-description";
import { projectDescriptionTypeConIndex } from "../types/types";

const api = supertest(app);

beforeEach(() => null);

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

afterAll(() => null);
