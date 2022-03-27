import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT: number = 3000;

app.get("/health", (req: Request, res: Response) => {
  res.send("OK");
});

app.get("*", (req: Request, res: Response) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.send(`Hello ${ip}! You are going to ${req.url}`);
});

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT} !`);
});
