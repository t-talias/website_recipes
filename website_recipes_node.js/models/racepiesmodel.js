var Mymongo=require('mongoose')
var recipeModel=new Mymongo.Schema({
    id :Number,
    recipeName :String,
    Description :String,
    pic:String,
    level:String,
    baking_time:String,
    Type:String,
    Recipe_components :Array,
    Entering_password :String
})
var Myrecepies=Mymongo.model("Myrecepies",recipeModel,"recipes")
module.exports=Myrecepies

