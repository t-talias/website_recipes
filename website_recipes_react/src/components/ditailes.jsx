import { useParams } from "react-router-dom"

const Ditailes =()=>{
   
    let params=useParams()
    return <div>
         <h4><br></br>פרטים נוספים :<br></br></h4>
             <h5> Entering password:</h5>{params.Entering_password} 
            <h5> Recipe components :</h5>{params.Recip_components} 
            <h5> Type :</h5>{params.Type} 
            <h5>baking time :</h5> {params.baking_time}
             </div>
    }
         

export default Ditailes