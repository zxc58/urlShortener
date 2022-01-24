//
const express= require("express");
const expressHandlebars= require("express-handlebars");
require("./config/mongoose");
const indexRouter= require("./routes/index");
//
const app= express();
const port= 3000;
//
app.engine("handlebars",expressHandlebars.engine());
app.set("view engine","handlebars");
app.set("views","./views");
app.use("/",indexRouter);
//
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
});