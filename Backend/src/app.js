const express = require("express");
const app = express(); // creating an instance of server
const cors = require("cors");
app.use(cors());
app.use(express.json());
const commentRoute = require("./routes/comment.routes");

app.use("/api",commentRoute);
module.exports = app;