import supertest from "supertest";
import app from "../app";

const api = supertest(app);

test("retorna status 200", async () => {
  await api.get("/").expect(200);
});

test("retorna un json", async () => {
  await api
    .get("/")
    .expect("Content-Type", /application\/json/);
});
