// import React from "react";
import React,{ useState } from "react";

import Fill from "./filtter";
import BasicExample from "./boostrap";
function Home(props){
    const[name,setName]=useState("Iam A Home Welcome ")
    const[user,setuser]=useState(" ")

    
    const handle= e =>{
        setuser(e.target.value)
    }
    return(
        <div>
           
         
           
            <input type=" text" placeholder="username" value={user}
             onChange={handle}/><br/>
               <h2>{user}</h2><br/>

             <h2>{name}</h2>
            <button onClick={()=>setName (<h3>'HI WELCOME HOME PAGE'</h3>)}>click</button>
          
           
            <Fill/>
            <BasicExample/>
            
        </div>
    )
        

}

export default Home;