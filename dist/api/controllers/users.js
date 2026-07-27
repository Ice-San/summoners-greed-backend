"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const getUsers = (_req, res) => {
    res.status(200).send({
        status: 200,
        message: "Users have been retrieved with success!"
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    const userId = Number(id);
    if (typeof userId !== "number") {
        res.status(400).send({
            status: 400,
            message: "User not found!"
        });
        return;
    }
    res.status(200).send({
        status: 200,
        message: "User have been retrieved with success!"
    });
};
exports.getUser = getUser;
