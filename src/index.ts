import app from "./app";
import { port } from "./config";
import "./db/mongo-conection";

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
