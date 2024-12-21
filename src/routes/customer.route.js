const express = require("express");
const app = express.Router();
const controller = require('../controllers/customer.controller');

app.get("/", controller.get);

app.get("/:id", controller.getById);

app.get("/name/:name", controller.getname);

app.post("/",  controller.create);

app.put("/:id",  controller.editall);

app.patch("/:id",  controller.edit);
app.delete("/:id",  controller.de);
module.exports = app;