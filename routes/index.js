//
const express= require("express");
const router= express.Router();
const home= require("./modules/home");
const shortener= require("./modules/shortener");
const Url= require("../models/url");
//
router.use("/", home); 
router.use("/shorten", shortener);
router.get("/:shortUrl", (req,res)=>{
    Url.find( { shortUrl: req.params.shortUrl })
    .then( result=> {
        console.log(result);
        if(result.length!=0) {
            res.redirect(result[0].originalUrl);
        }else{
            res.status(404).send("404")
        }
    });
});
//
module.exports= router;