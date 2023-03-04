import React from "react";
// import axios from 'axios';  

class User extends React.Component{
    constructor(){
        super();
        this.state={
            users:[],
            errorme:""
        }
    }
    // axios react method

    // componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>
    //     this.setState({
    //         users:res.data

    //      //     const users =res.data;
    //     //     this.setState({users})
    //     })).catch(error=>{
    //         console.log(error)
    //     })
    // }

    
    // fetch method raect
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json
                   
                });
            }).catch(err=>{
               this.setState({users:[]})
                
            })
        }
    
    render(){
        return(

            <div>
                <h2>Axios Page</h2>
                
                <table>
                    <thead>
                    <tr>
                       
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        
                    </tr>
                    </thead>
         <tbody>
        {
          this.state.users.length >0  && 
           this.state.users.map ((user,index) => {
            return(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          
            </tr>
            )
           })
           
        }
        {
            this.state.users.length===0 &&
            <tr>
                <td colSpan="5">error</td>
            </tr>
        }
        </tbody>
           
                    
                </table>
                
           

            </div>
        )
    }
}
export default User;