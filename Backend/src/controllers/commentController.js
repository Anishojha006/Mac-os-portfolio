const CommentsModel = require("../models/comments.model.js");

async  function commentcreationController (req, res){
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
}

async function  commnetfetchingController(req,res){
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
}

module.exports = {commentcreationController, commnetfetchingController}