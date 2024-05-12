import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import apiRouter from "./routes/api";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(apiRouter);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrando" });
});

server.listen(process.env.PORT);
