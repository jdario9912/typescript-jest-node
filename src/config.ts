import dotenv from "dotenv";
import { EnvironmentVariables } from "./types/types";

dotenv.config();

const port = process.env.PORT;

const env: EnvironmentVariables = {
  DB_URI: process.env.DB_URI || "",
};

const mongoUri: string = env.DB_URI;

export { port, mongoUri };
