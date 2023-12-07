import mongoose from "mongoose";
import { mongoUriTest } from "../config-test";

const dbConexion = () => {
  mongoose.connect(mongoUriTest).catch((error) => console.log(error.message));
};

const dbConexionClose = () => {
  mongoose.connection.close().catch(() => console.log("conexion cerrada"));
};

export { dbConexion, dbConexionClose };
