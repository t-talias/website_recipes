var myExpress=require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
var myRouter=myExpress.Router(
)
var my=require('../MiddelWare/userMiddel')
myRouter.use(my);
myRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var userModel=require('../models/userModel')



//Show all users
myRouter.get('/GetDataUser',(req,res)=>{
    res.status(200,{'Contect-Type':'appliction/json'})
    userModel.find({},function(err,data){
        if(err)
        console.log("err"+err);
        else
        res.json(data)  
    })
})

//Adding a user
myRouter.post('/AddUser',(req,res)=>{
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    res.setHeader('Access-Control-Allow-Origin','*');
    let  Myuser=req.body
    console.log("add user");
    userModel.create({Username:Myuser.Username,Password:Myuser.Password,Address:Myuser.Address,phone:Myuser.phone,
                     manager:Myuser.manager,Priority_recipes:Myuser.Priority_recipes},(e,r)=>{
        if(e)
        console.log(EEEEEEE)
        else
        {
           res.json(r) 
        }
        
       })
   })
   //Show user by name and password
   myRouter.get('/GetUserByNameAndPassword/:myname/:myPass', (req, res) => {
    let name=req.params.myname
    let pass=req.params.myPass
    userModel.find({Password:pass,Username:name}, (err, r) => {
        if(!err)
        res.json(r)
    })
})



//Displaying user recipes
myRouter.get('/GetByPassword', (req, res) => {
    let myPassword = req.body.Entering_password
    let ObjectUser=userModel.find({Entering_password:myPassword})
    res.status(200, { 'Content-Type': 'applicatin/json' }) 
    res.json(ObjectUser.Priority_recipes)
})


//Adding a recipe to the user
myRouter.post('/PostInArr/:myPassword', (req, res) => {
    let myPassword = req.params.myPassword
    let ObjectUser=userModel.find({Entering_password:myPassword})
    let addRecipe=req.body.Priority_recipes
    res.status(200, { 'Content-Type': 'applicatin/json' }) 
    let arr= ObjectUser.Priority_recipes
   arr.push(addRecipe)
   userModel.findByIdAndUpdate(ObjectID(ObjectUser._id),{Priority_recipes:arr},(e,r)=>{
    if(e)
    console.log(e)
    else
    res.json(r)
    })
})




module.exports=myRouter