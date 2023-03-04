import React from "react";
import axios from "axios";

 class Formvaliadtion extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
             Gmail:"",
            password:"",
            confirmpassword:"",
            errors: {
            usernameError:"",
            gmailError:"",
            passwordError:"",
            confirmError:"",
            datageting:"" 

            }

        }

    }
    hamdler =(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
            usernameError:"",
            gmailError:"",
            passwordError:"",
            confirmError:""
        })
    }
    // this is submit valiadtion
    
    submit=(e)=>{
        e.preventDefault()
        if(this.state.username==""){
            this.setState({
               usernameError:("please Enter Username")
                

            })
        } else if (this.state.Gmail==""){
            this.setState({
                gmailError:"please Enter gmail"
               

            })
            
        }  
        else if (this.state.password==""){
            this.setState({
                passwordError:"please Enter password"

            })
            
        }  
        else if (this.state.confirmpassword==""){
            this.setState({
                confirmError:"please Enter Confirmpassword"

            })
        }   else if (this.state.confirmpassword !==this.state.password){
            this.setState({
                confirmError:"confirm password Not mached"

            })
             } 
             else{
                alert("success")
             }
     
     const url="http://127.0.0.1:1227/Contact";
    //  const url= "https://userdata-81b49-default-rtdb.firebaseio.com/"
     const user={
        username:this.state.username,
        Gmail:this.state.Gmail,
        password:this.state.password,
        confirmpassword:this.state.confirmpassword
     }

     axios.post(url,{user})
     .then(result =>{
    console.log(result.data)
        }).catch(error=>{
            console.log(error)
        })
     
    //   axios.get("http://127.0.0.1:1227/UserList").then(res=>
    //    this.setState({
    //     datageting:res.data
    //    }))
       
    //   .catch(error=>{
    //     console.log(error)
    //   }
        
    //   )

            }
        
            
       
   
    render(){
        // const[username,gmail,password,confirmpassword]=this.state
        return(
            <div style={{backgroundColor:"blue",height:500}}>   
                <form onSubmit={this.submit}>        
                <input type=" text"  name="username" placeholder="username" 
                value={this.state.username} onChange={this.hamdler}/> <br/>
                <p style={{color:"red"}}>{this.state.usernameError}</p>

                <input type=" text"  name="Gmail" placeholder="Gmail" 
                value={this.state.Gmail} onChange={this.hamdler}/> <br/>
                <p style={{color:"red"}}>{this.state.gmailError}</p> 

                <input type=" text"   name="password" placeholder="password" 
                value={this.state.password} onChange={this.hamdler}/><br/>
                <p style={{color:"red"}}>{this.state.passwordError}</p>

                <input type=" text"  name="confirmpassword"  placeholder="confirmpassword" 
                value={this.state.confirmpassword} onChange={this.hamdler}/><br/>
                <p style={{color:"red"}}>{this.state.confirmError}</p>
                <button>submit</button>

                </form>
               
            </div>

        )
    }
 }

 export default Formvaliadtion;
 