var myExpress=require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { isObjectIdOrHexString } = require('mongoose')
var recipeModel=require('../models/racepiesmodel') 
var userModel=require('../models/userModel')
var myRouter=myExpress.Router()
const { ObjectID } = require("bson")




//View all recipes
myRouter.get('/GetDataRecipe',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    recipeModel.find({},function(err,data){
       console.log(data);
        if(err)
        console.log("err"+err);
        else
        res.json(data)  
    })
})
 
//Displaying a recipe by id
myRouter.get('/GetRecipeById/:myid', (req, res) => {
     let IdRecipe = req.params.myid
     console.log(IdRecipe)
     res.status(200, { 'Content-Type': 'applicatin/json' }) 
     recipeModel.find({_id:Object(IdRecipe)}, (err,data) => {
       console.log(111,data)
        if(err)
        console.log("err"+err);
        else
        res.json(data)
     })
})
    //Deleting a recipe provided it is managed
myRouter.delete('/DellRecipe',async (req,res)=>{
  let idtodell=req.body._id
  let passwordtodell=req.body.Entering_password
  let Objectrecipe=await recipeModel.find({_id:ObjectID(idtodell)})
  let ObjectUser= await userModel.find({Password:passwordtodell})
  res.status(200, { 'Content-Type': 'applicatin/json' }) 
   if (Objectrecipe[0].Entering_password==passwordtodell ||ObjectUser[0].manager){
    recipeModel.deleteOne({_id:ObjectID(idtodell)},async (err,data) => {
       
        if(err)
        console.log("err!!!!!!!!!!!!!!!!!!😕"+err);
        else{
           res.send(await recipeModel.find({}))
           res.end()
        }
     })
   }  
})

//Added a recipe
myRouter.put('/AddRecepie', async(Req, Res) => {
    console.log(1111);
   Res.setHeader('Access-Control-Allow-Origin','*');
    let Myrecepie = Req.body
    recipeModel.insertMany([Myrecepie],async(e,r)=>{
       if(e)
           console.log(e)
       else{
           Res.json(await recipeModel.find({}));
       }
       })
   })

///Editing a recipe
myRouter.put('/update/:myid',async(rec,res)=>{
   
    let some=rec.body
    let MyId=rec.params.myid
for (const [key, value] of Object.entries(some)) {
    await recipeModel.updateOne(
      { _id: ObjectID(MyId) },
      { $set: { [key]: value } }
    )
  }
  res.send(await recipeModel.find({}));
  res.end();
 })

module.exports=myRouter