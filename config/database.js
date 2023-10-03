const mongoose = require("mongoose");

module.exports.connnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect success");
    }
    catch (error){
        console.log("connect error");
    }
}