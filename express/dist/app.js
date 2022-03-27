"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
app.get("/health", (req, res) => {
    res.send("OK");
});
app.get("*", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    res.send(`Hello ${ip}! You are going to ${req.url}`);
});
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`);
});
