import { Link,Outlet } from "react-router-dom"

export const TheNav =()=>{
   return <> <nav id="nav" className="navbar navbar-inverse">
   <div className="container-fluid">
     <div className="navbar-header">
       <a className="navbar-brand" href="#"></a>
     </div>
     <ul  id="ul" className="nav navbar-nav">
       <li id="li"><Link to='/Homepage'>Homepage</Link></li>
       <li  id="li"><Link to='/About'>About</Link></li>
       <li id="li">  <Link to='/Joining'>Joining</Link></li>
       <li  id="li"><Link to='/SandA'>Admin area</Link></li>
       <li  id="li"><Link to='/Enrollment'> Enrollment </Link></li>
       <li id="li"><Link to='/Addrecipe'>Add recipe</Link></li>
       
     </ul>
   </div>
 </nav><Outlet></Outlet></>
}
export default TheNav ;