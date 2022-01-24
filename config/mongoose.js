//
const mongoose= require("mongoose");
const db= mongoose.connection;

//
mongoose.connect("mongodb://localhost/url-list");
db.on("error", ()=>console.log("db error on config") );
db.once("open", ()=>console.log("db open on config") );

//
module.exports= db ;