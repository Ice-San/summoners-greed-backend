"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const users_1 = __importDefault(require("./api/routes/users"));
const app = (0, express_1.default)();
const { PORT } = process.env || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    "origin": "http://localhost:3000",
    "methods": ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/users", users_1.default);
app.listen(PORT, () => {
    console.log(`The server is online at http://localhost:${PORT}`);
});
