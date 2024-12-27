const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// define routes here
app.get("/", authMiddleware.authenticate, controller.get); 
app.get("/:id", authMiddleware.authenticate, controller.getById);
app.get("/", controller.get);
app.get("/:id",controller.getById);
app.post("/", controller.create);
app.put("/:id", controller.update);
app.delete("/:id", controller.delete);

module.exports = app;
