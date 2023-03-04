import React from 'react';
import logo  from './images/single_cource.png'
import logo2 from './images/single_project.png'

class Slider extends React.Component{
     constructor(props){
      super(props);
      this.state={
        slider:[logo,logo2]
      }
     }

render(){
  return(
    <div>
     
<div id="demo" className="carousel slide" data-bs-ride="carousel">
{/* 
{/* //   <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
{/* //   <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo} alt="Los Angeles" className="d-block"style={{width:"100%",height:"350px"}}/>
      <div className="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={logo2} alt="Chicago" className="d-block"style={{width:"100%",height:"350px"}}/>
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src={logo} alt="New York" className="d-block"style={{width:"100%",height:"350px"}}/>
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div> 
    {/* {
      this.state.slider.map((slide,index)=>{
        return(
     <div className="carousel-item active" key={index}>
 <img src={require('./images/single_project.png')}  alt="New York" className="d-block"style={{width:"100%",height:"350px"}}/>
 </div>
        )
      })
    } */}
  </div>
  
{/* //   <!-- Left and right controls/icons --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container-fluid mt-3">
  <h3>Carousel Example</h3>
  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
</div>

    </div>
  )
}

}
export default Slider;