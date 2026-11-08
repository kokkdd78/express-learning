
 // In-memory task data
const tasks = [
  { id: 1, title: "Study Express" },
  { id: 2, title: "Finish TrafficMap" }
];

// Get all tasks
const getAllTasks = () => tasks;

// Get a task by ID
const getTaskById = (id) => {
  return tasks.find(task => task.id === id);
};

// Create a task
const createTask = (title) => {
  const id = tasks.length
    ? Math.max(...tasks.map(task => task.id)) + 1
    : 1;

  const newTask = { id, title };
  tasks.push(newTask);
  return newTask;
};

// Update a task
const updateTask = (id, title) => {
  const task = getTaskById(id);
  if (!task) return null;

  task.title = title;
  return task;
};

// Delete a task
const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

// Export model functions
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
