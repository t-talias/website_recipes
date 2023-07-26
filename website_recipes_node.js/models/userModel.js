var Mymongo=require('mongoose')
var userModel=new Mymongo.Schema({  
    Username :String ,
    Password : String,
    Address : String,
    phone : String,
    manager :String,
    Priority_recipes :Array
})
var Myusers=Mymongo.model("MyuserModel",userModel,"users")
module.exports=Myusers
