const mongoose = require("mongoose");

function ConnectingToDatabase(){
   try{
     mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to database"); 
    })
   }
   catch(err){
    console.log("unable to connected with database");
    console.log(err.message);
   }
}

module.exports = ConnectingToDatabase;