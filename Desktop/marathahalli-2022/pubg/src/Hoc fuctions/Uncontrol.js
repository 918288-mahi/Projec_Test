import React, { useRef, useState } from 'react'

function Uncontrol() {
    const inputref=useRef()
    const [name,setname]=useState("")

    const upadte=(e)=>{
        setname(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert(inputref.current.value)
        setname("")
        
        

    }
  
  return (
    <>
    <div>UncontrolComponents</div>
    {/* <p>uncontrol:{name}</p> */}
    <form onSubmit={handlesubmit}>
        <input type="text" ref={inputref} value={name} onChange={upadte}/>
        <input type="submit" value="submit"/>
    </form>
    </>
    
  )
}

export default Uncontrol