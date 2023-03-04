import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:'mahi',
            nick:'Babu'
        }

    }
    add= () => {
        this.setState({
           count:this.state.count + 1,
                  name:"mahendra",
                  nick:"Bujji"
                 
                })
        
    }

   render(){
    // const[name]=this.setState.name
        return(
            <div>
                
               
                <h2>Hello This is Mahi </h2>
                {/* <span>count:{this.state.count}</span><br/> */}
                <span>name:{this.state.name}</span><br/>
                {/* <span>name:{name}</span><br/> */}
                <span>Nick name:{this.state.nick}</span><br/>
                <span>count:{this.state.count}</span><br/>
                
                <button onClick={this.add}>Count</button>
                </div>

        )
    }
}
export default About;