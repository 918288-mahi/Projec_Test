import React from "react";
import './todolist.css';
const Todolist =({todoslist,deletehandle,updateTodoItem})=>{
        return(
            <div>
                {
                    todoslist.map((todo,index)=>{
                      return(
                      <div key={index} className=
                      "content">
                        
                         <h2 style={{color:"red"}}>{todo}&nbsp;<button onClick={()=>deletehandle(index)}>Delete</button>
                         <button onClick={()=>updateTodoItem(index)}>Edit</button></h2>
                        </div>
                      )
                        
                    })
                }

            </div>
        )
}
export default Todolist;