const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/api/users", userController.getUsers);

router.get("/api/users/:id", userController.getUser);

router.post("/api/users", userController.createUser);

router.delete("/api/users/:id", userController.deleteUser);

router.put("/api/users/:id", userController.updateUser);

module.exports = router;
