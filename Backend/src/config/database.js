const mongoose = require("mongoose");

function ConnectingToDatabase(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to database"); 
    })
}

module.exports = ConnectingToDatabase;