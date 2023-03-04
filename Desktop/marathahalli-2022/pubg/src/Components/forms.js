
import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            gmail:""
           
        }
    // this.handler=this.handler.bind(this)
    }
   

    handler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handling(e){
        this.setState({
            gmail:e.target.value
        })
    }



render(){
    return(
        <div>
             <input type=" text"  placeholder="Username"  value={this.state.username} onChange={this.handler}/> 
             <br/>
             <span>{this.state.username}</span><br/>
             <input type=" Email" placeholder="Email" value={this.state.gmail} onChange={this.handling.bind(this)}/> <br/>
             <label>{this.state.gmail}</label><br/>
             <button onClick={this.click}>Submit</button>

        </div>
    )
}
}
export default Form;