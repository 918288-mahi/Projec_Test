import React, { useState } from 'react'
import Reducer from './Reducer'
// import UsEffect from './usEffect'

export default function () {
  const[todo,setTodo]=useState("")
  const[data,setData]=useState([])
  const[selectindex,setSelectIndex]=useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectindex !==null){
      let newdata=[...data]
      newdata[selectindex]=todo;
      setData(newdata)
      // setSelectIndex(null)
    }else{
    setData([...data,todo])
    }
    setTodo("")

  }
  const deletehandle=(indexvalue)=>{
    const newdele=data.filter((_,index)=>index !==indexvalue)
    setData(newdele)
    
   
  }
  // const deletehandle = (indexvalue) => {
  //   const newData = [...data];
  //   newData.splice(indexvalue, 1);
  //   setData(newData);
  // }
  
  const Updatehandle =(index)=>{
    setSelectIndex(index)
    setTodo(data[index])
  }
  return (
    <>
    
      <form>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <input type="button" onClick={handleSubmit} value={selectindex !== null ? 'Update' : 'Add'} />     
       </form>
      <ul>
        {
          data.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>Updatehandle(index)}>Edit</button>
            <button onClick={()=>deletehandle(index)}>Delete</button>

            </li>
          ))
        }
      </ul>
  
      <Reducer/>
    </>
  )
}
