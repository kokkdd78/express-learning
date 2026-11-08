# Express.js – Middleware, CORS, and RESTful API

## 1. Project Overview

This project is a simple Task Management REST API developed using Node.js and Express.js. It demonstrates middleware, JSON parsing, CORS configuration, CRUD operations, and the MVC architecture without a View component.

Tasks are stored in a JavaScript array for demonstration purposes.

## 2. Middleware Implementation

**Logging Middleware:** Records the HTTP method and URL of incoming requests.

```javascript
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

**JSON Parsing Middleware:** Parses incoming JSON request bodies into JavaScript objects accessible through `req.body`.

```javascript
app.use(express.json());
```

Both middlewares were tested using HTTP requests from Postman.

## 3. CORS Configuration

The `cors` package was installed to control which browser origins are allowed to read API responses.

```javascript
app.use(cors({
  origin: "http://localhost:3000"
}));
```

Two browser tests were performed:

- **Port 3000:** Allowed. The browser successfully displayed the API response, `Hello Express`.
- **Port 3001:** Blocked. The browser displayed a CORS policy error because the origin did not match the allowed origin.

These tests verified the configured CORS restriction.

## 4. REST API and CRUD Operations

The API provides the following endpoints:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

**Example — Create a Task**

Request: `POST http://localhost:4000/tasks`

Request body:

```json
{
  "title": "Learn MVC"
}
```

Response: `201 Created`

```json
{
  "id": 3,
  "title": "Learn MVC"
}
```

All four CRUD operations were tested using Postman. The API also handles invalid task titles with `400 Bad Request` and missing tasks with `404 Not Found`.

## 5. MVC Architecture

The project separates responsibilities into the following components:

- **app.js:** Initializes Express, configures middleware and CORS, and registers routes.
- **routes/tasks.js:** Defines endpoints and connects them to controller functions.
- **controllers/taskController.js:** Processes requests, calls model functions, and sends HTTP responses.
- **models/taskModel.js:** Manages task data and performs CRUD operations.

**Example — GET /tasks Request Flow**

1. Express receives the request and forwards it to the tasks router.
2. The router selects `taskController.getTasks`.
3. The controller calls `taskModel.getAllTasks()`.
4. The model returns the stored tasks.
5. The controller sends the tasks to the client as JSON.

This structure separates routing, request processing, and data operations, improving maintainability.

## 6. Running the Application

Install project dependencies and start the API server:

```bash
npm install
node app.js
```

The API runs at `http://localhost:4000`.

Task data is stored in memory and resets when the server restarts.

## 7. Testing Evidence

### CRUD Tests

- [GET – Retrieve Tasks](screenshots/get-tasks.png)
- [POST – Create Task](screenshots/post-task.png)
- [PUT – Update Task](screenshots/put-task.png)
- [DELETE – Delete Task](screenshots/delete-task.png)

### CORS Tests

- [Allowed Origin – Port 3000](screenshots/cors-allowed.png)
- [Blocked Origin – Port 3001](screenshots/cors-blocked.png)

## 8. Conclusion

The application successfully demonstrates Express.js middleware, JSON request parsing, CORS configuration, RESTful CRUD endpoints, and MVC organization. Functional tests were performed using Postman and Microsoft Edge DevTools.