const mongoose = require("mongoose");

const comentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    comment:{
         type:String,
        required:true
    }
});

const CommentsModel = mongoose.model("Comments",comentsSchema); // Comments is the name of the collection in thye database

module.exports = CommentsModel;