import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import logo  from './images/single_cource.png'
import logo2 from './images/single_project.png'




function Contact(){

 return(
    <div>
      



    <Carousel >
      <Carousel.Item  interval={1000}  >
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
          style={{height:'350px'}}
        />
        <Carousel.Caption >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={1000}>
        <img
          className="d-block     w-100"
          src={logo2}
          alt="Second slide"
          style={{height:'350px'}}
        />

        <Carousel.Caption  >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item  interval={1000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Third slide"
          style={{height:'350px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    
    
  </div>
    )

}
export default Contact;