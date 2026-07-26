const express = require("express");
const app = express(); // creating an instance of server
const CommentsModel = require("./models/comments.model.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/createComment", async (req, res) => {
    try {
        const { name, comment } = req.body;
        const Comment = await CommentsModel.create({
            name, comment
        })
        console.log(Comment);
        res.status(201).json({
            message: "Comment added sucessfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            message:err.message
        })
    }
})

app.get("/getComments",async (req,res)=>{
    try{
        const allComments = await CommentsModel.find();
    res.status(200).json({
        message:"Fetched sucessfully",
        allComments
    })
    }
    catch(err){
        res.status(404).json({
            message:err.message
        })
    }
})
module.exports = app;