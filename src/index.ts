import app from "./app";
import { port } from "./config";

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
