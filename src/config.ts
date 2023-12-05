import dotenv from "dotenv";
import { EnvironmentVariables } from "./types/types";

dotenv.config();

const port = process.env.PORT;
const testEnvironment = process.argv[2];
const nodeEnv = process.argv[2];
let mongoUri: string;

const env: EnvironmentVariables = {
  DB_URI_DEV: process.env.DB_URI_DEV || "",
  DB_URI_PRODUCCION: process.env.DB_URI_PRODUCCION || "",
  DB_URI_TEST: process.env.DB_URI_TEST || "",
};

if (nodeEnv === "dev") mongoUri = env.DB_URI_DEV;
else if (nodeEnv === "produccion") mongoUri = env.DB_URI_PRODUCCION;
else mongoUri = env.DB_URI_TEST;

export { port, testEnvironment, mongoUri };
