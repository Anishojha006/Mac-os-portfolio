const express = require("express");
const app = express(); // creating an instance of server
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"))
const commentRoute = require("./routes/comment.routes");

app.use("/api",commentRoute);
// __dirname give path of my file in which this code is written 
// * is wild card route  =>helps to handel those api's which are not created by us
app.use('*name',(req,res)=>{
  res.sendFile(path.join(__dirname, ".." , "/public/index.html" ))
})

module.exports = app;