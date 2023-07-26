import { useNavigate,Outlet } from "react-router-dom";
import UserContext from "../UserContext";
import {useContext ,useState } from "react";
import SandA from "./SandA";
import axios from "axios";
import { useEffect } from "react";
const Joining=()=>{
    const [IsManager, setIsMenager]=useState(false)
    let mynavigate = useNavigate();
    const setcurrentUser=useContext(UserContext).setuser
    const [login,setlogin]=useState(null)
    
    const check=()=>{
        
        let myname=document.getElementById("txtname").value
        let mypass=document.getElementById("txtPassword").value

        if(myname=="" || mypass==""){
            alert("enter all details!!");
        }
        else{
            console.log(myname,mypass)
            axios.get(`http://localhost:1234/Users/GetUserByNameAndPassword/${myname}/${mypass}`).then((v)=>{
                setlogin(v.data[0])
               if(v.data[0]!=undefined){
                  setcurrentUser({name:myname, manager:v.data[0].manager=="true"?true:false})

               }
                else 
                alert("undefind")
            })
           
        }

    }
    return <div id="join">
        <br></br><br></br>
    <input id="txtname" placeholder="enter name " className="form" defaultValue={""}></input>
    <br></br><br></br>
    <input id="txtPassword" placeholder="enter Password " className="form" defaultValue={""}></input>
    <br></br><br></br>
    <input type='submit'onClick={()=>check()} id="send"></input>
    {/* {login==null?<p>noooo</p>:<p>yesss</p>} */}
    {/* {
        IsManager?<SandA></SandA>:<></>
    } */}

     <Outlet></Outlet> </div>
 }
 export default Joining;