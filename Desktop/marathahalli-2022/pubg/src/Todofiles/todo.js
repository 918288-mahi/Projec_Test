import React from "react";
import { useState } from "react";
import Todolist from "./todolist";
import './todolist.css';
function Todo(){
const [task,settask]=useState("")
const [todos,settodos]=useState([])
const [edit,setedit]=useState()
const [toggle,settoggle]=useState(true)

const changerhandle =(e)=>{
    settask(e.target.value)
}
const submithandle =e =>{
    e.preventDefault();
    if(!task){
        alert("fill feild")
    }
    
    else if(task && !toggle){
        settodos(
            todos.map((elem)=>{
                if(elem.index===edit){
                    return {...elem,task}                
                }
                return elem
            })

        )
        settoggle(false)
         settask('')
         setedit(null)

    }
    
    else{
        const newtodos=[...todos,task]
        settodos(newtodos)
        settask("")
    }
}
const deletehandle =(indexvalue)=>{
    const newdelete =todos.filter((index)=> index.indexvalue !==indexvalue)
    settodos([...newdelete])
   
}

    
const updateTodoItem =(index)=>{
    let updatesin=todos.find((ele)=>{
        return ele.index!==index
    })

       
    
   
    settask(updatesin)
    settoggle(false)
    setedit(index)
    

    

   
}
    

    return(
        <div className="cont">
            <form onSubmit={submithandle}>
         <input type="text" value={task}  name="task" onChange={changerhandle} />
          { toggle ? <input type="submit" value="Add" />:<input type="submit" value="Edit" />
          }
        </form>
        <Todolist todoslist={todos} deletehandle={deletehandle} updateTodoItem={updateTodoItem}/>
        </div>
     

    )
}
export default Todo;