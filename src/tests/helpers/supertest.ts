import app from "../../app";
import supertest from "supertest";

const api = supertest(app);

export { api };
