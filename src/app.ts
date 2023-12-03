import express from "express";

const app = express();

app.get("/", (_req, res) => res.status(200).json(null));

export default app;
