const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");

router.get("/api/roles", roleController.getRoles);

router.get("/api/roles/:id", roleController.getRole);

router.post("/api/roles", roleController.createRole);

router.delete("/api/roles/:id", roleController.deleteRole);

router.put("/api/roles/:id", roleController.updateRole);

module.exports = router;
