import { BrowserRouter, Routes,Route } from "react-router-dom"
import Homepage from "./components/homepage"
import Joining from "./components/joining"
import  {TheNav}  from "./components/nav"
//import './bootstrap.css'
import Ditailes from "./components/ditailes"
import  About from "./components/aoubt"
import SandA from "./components/SandA"
import Enrollment from "./components/Enrollment"
import { useState } from "react"
import { MyProvider } from "./UserContext"
import Addrecipe from "./components/Addrecipe"
import './App.css'

function App() {
  const[currentUser, setcurrentUser]=useState({name:"", manager:false});
  const [login ,setlogin]=useState(null);
   const tranfer={
  currentuser:currentUser,
  setuser:setcurrentUser,
  login:login,
  setlogin:setlogin
}

  
  return (<div>
  <MyProvider value={tranfer}>
    <BrowserRouter>
   <Routes> 
    <Route path="/" element={<TheNav/>} > 
    <Route path="/" element={<Homepage/>} > </Route>
      <Route path='SandA' element={<SandA></SandA>}></Route>
      <Route path="/Enrollment" element={<Enrollment/>} > </Route>
        <Route Path="About" element={<About/>}> </Route>
          <Route path="Homepage" element={<Homepage/>}>
            <Route path="Ditailes/:Entering_password/:Recip_components/:Type/:baking_time" element={<Ditailes/>}> </Route>
        </Route>
        <Route path="Addrecipe" element={<Addrecipe/>}></Route>
        <Route path="Joining" element={<Joining></Joining>}></Route>
        </Route>     
   </Routes>
   </BrowserRouter>
 </MyProvider>
    </div>
  );
}


export default App;
