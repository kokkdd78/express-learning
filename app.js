const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();

// Logging middleware to log HTTP requests
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS middleware to allow the client origin
app.use(cors({
  origin: "http://localhost:3000"
}));

// Root route
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Street test route
app.post("/streets", (req, res) => {
  console.log(req.body.name);
  res.send(req.body.city);
});

// Mount task routes
app.use("/tasks", tasksRouter);

// Start the Express server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});