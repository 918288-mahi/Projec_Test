import React, { useReducer }  from 'react'
const inselState={
    count:0
}

function reducer(state,action){
    switch(action.type){
    case 'increment':
        return {
            count:state.count + 1}
     case 'decrement':
        return{count:  state.count - 1}
        default:
        throw new Error();
    }

}

function Reducer() {
    const[state,dispach]=useReducer(reducer,inselState);
  return (
    
    <div>
        <p>count:{state.count}</p>
        <input type="button" value="increment" onClick={()=>dispach({type:'increment'})}/>
        <input type="button" value="decrement" onClick={()=>dispach({type:'decrement'})}/>
    </div>
  )
}

export default Reducer