var fs = require("fs");

const fun=function(Req,Res,next){
    switch (Req.url) {
        case '/AddUser':
        fs.appendFile('./theMiddle.txt', Req.body. Username +"  "+Req.body.Password+"  "+new Date+"\n", (err)=> {
         if (err)
         console.log("error- "+err);
       else
         console.log("yyyyyyyyyy");
        }) 
        break;
    
        default:console.log("this midellWare: "+new Date);
            break;
    }
    next()
}
module.exports=fun
