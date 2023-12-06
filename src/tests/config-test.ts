import dotenv from "dotenv";
import { EnvironmentVariables } from "../types/types";

dotenv.config();

const env: EnvironmentVariables = {
  DB_URI: process.env.DB_URI_TEST || "",
};

const mongoUriTest = env.DB_URI;

export { mongoUriTest };
