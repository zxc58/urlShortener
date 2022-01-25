//
const mongoose= require("mongoose");

//
const schema= new mongoose.Schema({
 shortUrl: { type: String, required: true },
 originalUrl: { type:String, required: true },
});

//
module.exports= mongoose.model("Url", schema);