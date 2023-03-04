import React from 'react'
import { Link } from 'react-router-dom';
import './mobiles.css'
import {connect} from 'react-redux'

class Mobiles extends React.Component{
   constructor(props){
    super(props);
    
   }
     
  render(){
  return(
    
    <section className='container'>
    <section className="row">
    
      {
        this.props.products.map((product,index) =>{


          return(
           
            <div className="card" style={{ width: " 18rem" }} key={index} >
            <img  src={`${product.images}`}className="card-img-top" alt="..." style={{ height: "200px" }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.decs}</p>
              <p className="card-text">{product.Price}</p>

              <Link to="/addcart" className="btn btn-primary">Go Somewhere</Link>
            </div>
          </div>
          

          )
        })
      }
       
    </section>
  </section>

  )
}
}
const  mapStateToProp = (state)=>{
  return{
    products:state.product.products
  }
}
export default connect(mapStateToProp)(Mobiles);