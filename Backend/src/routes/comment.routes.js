const express = require("express");
const commentControllers = require("../controllers/commentController.js");
const commentRoute = express.Router(); // used to create route in file other than app.js

commentRoute.post("/createComment",commentControllers.commentcreationController);
commentRoute.get("/fetchcomments",commentControllers.commnetfetchingController);


module.exports = commentRoute;
