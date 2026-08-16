const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTaskById,
  patchTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/tasks", getAllTasks);
router.post("/createTask", createTask);

router.get("/task/:id", getTaskById);
router.patch("/task/:id", patchTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
