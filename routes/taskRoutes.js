const express = require("express");

const { createTask, getdetailTask, updateTask, deleteTask } = require("../controllers/taskControllers");
const { isowner } = require("../middleware/taskMiddleware.js");

const router = express.Router();

router.post("/create", createTask);
router.get("/detail", isowner , getdetailTask);
router.post("/delete", isowner, deleteTask);
router.post("/update", isowner, updateTask);

module.exports = router;