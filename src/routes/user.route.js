const express = require('express');
const app = express.Router();
const controller = require('../controllers/user.controller');

app.post("/register", controller.register);
app.post("/login", controller.login);


module.exports = app;