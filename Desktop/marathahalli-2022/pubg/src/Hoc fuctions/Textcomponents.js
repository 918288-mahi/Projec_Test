import React from 'react'

function Textcomponents(props) {
  return (
    <div>
    <div>Textcomponents</div>
    <input type="text" onChange={props.handle}/>
    </div>
  )
}

export default Textcomponents