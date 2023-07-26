import axios from "axios";
import {useContext, useEffect, useState  } from "react";
import UserContext from "../UserContext";
export const SandA =()=>{
   //  const add=useContext(UserContext).onadd
   //  const locallist=useContext(UserContext);
   const currentUser=useContext(UserContext).currentuser
    const[list, setlist]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:1234/Users/GetDataUser').then(v=>{setlist(v.data)})
    },[]
    )
       const AA=()=>{
        if(currentUser.manager==false){
          return <p>error</p>
        }
        else{
          return <table>
          <thead>
            <tr>
              <th>Name</th><th>Password</th><th>Address</th><th>Phone</th><th>IsManager</th><th>priority recipes</th>
            </tr>
            </thead>
            <tbody>
         {list.map(l=>(<tr key={l.id}>
          <td>{l.Username}</td>
          <td>{l.Password}</td>
          <td>{l.Address}</td>
          <td>{l.phone}</td>
          <td>{l.manager}</td>
          <td>{l.Priority_recipes}</td>
         </tr>)) }
          </tbody>
        </table>
        
        }
       }
       return<>{AA()}</>
      }
    export default SandA




