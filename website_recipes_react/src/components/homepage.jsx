import { useEffect, useState ,useContext } from "react";
import { Link ,Outlet } from "react-router-dom";
import axios from 'axios'
import { Recipe } from "../class/Recipes";
import UserContext from "../UserContext";



const Homepage=()=>{
    const local= useContext(UserContext).recipes;
    const[recipes,setrecipes]=useState([]);

    const date=(id)=>{
      document.getElementById(`${id}`).style.display="inline";
    }

    const close=(id)=>{
      document.getElementById(`${id}`).style.display="none";
    }
    
    useEffect(()=>{
      axios.get('http://localhost:1234/Recipes/GetDataRecipe').then(v=>{setrecipes(v.data)})},[])  

   return (<center> {recipes.map(n=>(<span key={n._id}>
          
     <div id={n._id} className="data">
         <button id="x" onClick={()=>close(n._id)}>x</button><br></br>
         <p>Entering password :  {n.Entering_password} </p><br></br>
         <p>Recipe components : {n.Recipe_components}</p> <br></br>
         <p>Type : {n.Type} </p> <br></br>
         <p>baking_time : {n.baking_time}</p>
         <p>level : {n.level}</p>
      </div>

      <button className="recipButton" onClick={()=>date(n._id)}>
         <img src={n.pic} className="img"></img>
         <div>name:{n.recipeName} &nbsp; &nbsp; level: {n.level}</div>
      </button>&nbsp; &nbsp;&nbsp; &nbsp;
    </span>))}
    

   </center>)
    



}
 export default Homepage







 


    
       
