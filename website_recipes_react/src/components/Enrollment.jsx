import UserContext from "../UserContext";
import {useContext ,useState } from "react";
import axios from "axios";
export const Enrollment =()=>{
    const AddUser=(UserToAdd )=>{
        axios.put('http://localhost:1234/Users/AddUser', UserToAdd).then((v)=>{alert(" התווסף")});
    }
 
    
 const [UserToAdd,setuser]=useState({})
        const currentuser=useContext(UserContext).currentuser.name


    return<div class="form-group"> <div id="Enrollment" class="col-sm-5" > 
    <input id="txtname" class="form-control" placeholder="enter name " onChange={(e)=>{setuser({...UserToAdd,Username:e.target.value})}}></input><br></br>
    <input id="txtPassword" class="form-control" placeholder="enter Password " onChange={(e)=>{setuser({...UserToAdd,Password:e.target.value})}}></input><br></br>
    <input id="txtname" class="form-control" placeholder="enter Address " onChange={(e)=>{setuser({...UserToAdd,Address:e.target.value})}}></input><br></br>
    <input id="txtname" class="form-control" placeholder="enter phone " onChange={(e)=>{setuser({...UserToAdd,phone:e.target.value})}}></input><br></br>
    <input id="txtname" class="form-control" placeholder="enter if manager " onChange={(e)=>{setuser({...UserToAdd,manager:e.target.value})}}></input><br></br>
    <input id="txtname" class="form-control" placeholder="enter  Priority recipes " onChange={(e)=>{setuser({...UserToAdd,Priority_recipes:e.target.value})}}></input><br></br>
    <input class="form-control" type='submit'id="send" onClick={(e)=>AddUser(UserToAdd,e)}></input>
        </div></div>
    
     }
    
     export default Enrollment