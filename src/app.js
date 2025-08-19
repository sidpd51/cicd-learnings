const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello Mohit!");
});

app.post("/", (req, res) => {
	res.status(200).send(`Hola, ${req.query.name}`);
});

module.exports = app;
