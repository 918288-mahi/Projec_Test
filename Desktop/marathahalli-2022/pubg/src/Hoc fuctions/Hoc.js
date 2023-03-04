import React from 'react'

const Hoc=(Components)=> {
  return (
   class extends React.Component{
    state={
        auth:true,
    }
    render(){
        return(
            <div>
                {this.state.auth ?<Components />:<h1>Please Login </h1> }
            </div>
        )
    }
   }
  )
}

export default Hoc