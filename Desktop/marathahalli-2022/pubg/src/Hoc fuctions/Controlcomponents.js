import React, { useState } from 'react'
import Textcomponents from './Textcomponents';
import Uncontrol from './Uncontrol';

function Controlcomponents() {
    const [name,setname]=useState("");
   const handlechange =e=>{
        setname(e.target.value)
    }
  return (
    <div>
        
         <p>name:{name}</p>
    <form>
       
        <input type="text" onChange={handlechange} />


    </form>
    <Textcomponents handle={handlechange}/>
    <Uncontrol/>
    </div>
  )
}

export default Controlcomponents