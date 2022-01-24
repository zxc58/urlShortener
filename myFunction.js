//
module.exports= number=>{
    const string= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length= string.length;
    let returnString="";
    for(let i=0; i<number; i++){
        returnString+= string.charAt( Math.floor( Math.random()*length) );
    }
    return returnString;
}