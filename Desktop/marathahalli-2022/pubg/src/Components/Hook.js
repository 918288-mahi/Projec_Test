// import React from "react";
import React,{ useState } from "react";

// import {Redirect} from 'react-router'
function Count(props){
    const[count,setcount]=useState(0);
    // const [auth,setauth]=useState(false)
    // if(auth){
    //     return <Redirect to='/about'/>
    // }

   

   
    return(
        <div>
           
            <h1>Iam A Count Page</h1>
            <p>count:{count}</p>
            <button onClick={()=>setcount(count+1)}>click</button>
   
           
            
        </div>
    )
        

}

export default Count;