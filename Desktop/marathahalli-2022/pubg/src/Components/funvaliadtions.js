import React from "react";
import { useState } from "react";
export default function Funvalidation(){
    const[data,setdata]=useState({
         name:"",
         password:""
})
    const [errors,seterror]=useState({
        nameerr:undefined,
        passworderr:undefined
    })
    
 const changer=(e)=>{
   
    setdata({ ...data, [e.target.name]: e.target.value });
    seterror({...data,[setdata]:e.target.value})
    
   
 }
    const handle =(e)=>{
        e.preventDefault () ;

        if(data.name==""){
            seterror(pererr =>{
              return{  
                ...pererr,
                nameerr:"please enter username"
              }
            }
            )
        }
        else{
          alert("success")
        }
    }
    
    return(
        <div>
            <h1>hello</h1>
            <form  onSubmit={handle}>
                <input type="text" name="name" value={data.name} onChange={changer} /><br/>
                <p>{errors.nameerr}</p>
                <input type="text" name="password" value={data.password} onChange={changer} /><br/>
                <input type="submit" value="login"/>

            </form>
        </div>
    )
}
