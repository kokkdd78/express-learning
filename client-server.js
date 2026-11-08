const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Cors test page</h1>");
});

app.listen(3001,() => {
    console.log("Client server is running on port 3000");
});