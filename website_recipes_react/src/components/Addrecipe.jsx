import {useContext, useState  } from "react";
import axios from "axios";
import UserContext from "../UserContext";

const Addrecipe=()=>{
    const [recipeToAdd,setRecipe]=useState({})
    const currentuser=useContext(UserContext).currentuser.name
    const addRecipes=(recipe, e)=>{
       //e.preventDefault()
       console.log(currentuser);
        if(currentuser==""){
          alert("nooooooooooooooooo");
             return;
        }

        else
axios.put('http://localhost:1234/Recipes/AddRecepie', recipe).then((v)=>{ console.log("hi"); alert("המתכון התווסף")});
}
    return <form>
        <br></br><br></br><br></br>
        <input type='text' id='name' placeholder="enter name" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,recipeName:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='Description' placeholder="enter Description" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,Description:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='Recipe_components' placeholder="enter Recipe_components" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,Recipe_components:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='level' placeholder="enter level" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,level:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='baking_time' placeholder="enter baking_time" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,baking_time:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='Type' placeholder="enter Type" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,Type:e.target.value})}}></input>
        <br></br><br></br>
        <input type='text' id='Entering_password' placeholder="enter Entering_password" className="form" onChange={(e)=>{setRecipe({...recipeToAdd,Entering_password:e.target.value})}}></input>
        <br></br><br></br>
        <input type='button' id="butt1" onClick={(e)=>addRecipes(recipeToAdd,e)}value="submit"/>
    </form>

}
export default Addrecipe