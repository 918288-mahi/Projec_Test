import React from 'react'
// import Layout from '../Components/heading'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice'

  export default function Counter() {
  const count = useSelector((store) => store.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      
      <div>
    
      <span style={{color:'blue'}}>count:{count}</span><br/>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{backgroundColor:'green'}}
        >
          Increment
        </button>
      
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{backgroundColor:'red'}}
        >
          Decrement
        </button>
      
      </div>
    </div>
  )
}
