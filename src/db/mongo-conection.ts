import mongoose from "mongoose";
import { mongoUri } from "../config";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a base de datos Mongo."))
  .catch((e) =>
    console.log(`Ocurrio un error: ${e.message}`)
  );
