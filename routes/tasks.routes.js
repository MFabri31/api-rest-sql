const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/api/tasks", taskController.getTasks);

router.get("/api/tasks/:id", taskController.getTask);

router.post("/api/tasks", taskController.createTask);

router.delete("/api/tasks/:id", taskController.deleteTask);

router.put("/api/tasks/:id", taskController.updateTask);

module.exports = router;
