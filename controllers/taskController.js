
const taskModel = require("../models/taskModel");

// Get all tasks
const getTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.json(tasks);
};

// Get a task by ID
const getTask = (req, res) => {
  const id = Number(req.params.id);
  const task = taskModel.getTaskById(id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

// Create a task
const createTask = (req, res) => {
  const { title } = req.body || {};

  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Valid title is required" });
  }

  const task = taskModel.createTask(title.trim());
  res.status(201).json(task);
};

// Update a task
const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body || {};

  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Valid title is required" });
  }

  const task = taskModel.updateTask(id, title.trim());

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

// Delete a task
const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const deleted = taskModel.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};

// Export controller functions
module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
