import React from "react";
// import {Link } from "react-router-dom";   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




 

const Layout = () => {
 
  
  return (
    <div>
       <>
      <Navbar bg="dark" variant="dark
      " fixed="top">
        <Container>
          <Navbar.Brand href="/">My World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="Hook">Count</Nav.Link>
            <Nav.Link href="counter">Counter</Nav.Link>
            <Nav.Link href="mobiles">Mobiles</Nav.Link>
            <Nav.Link href="addcart">Addcart</Nav.Link>
            <Nav.Link href="axios">Axios</Nav.Link>
            <Nav.Link href="validation">Form</Nav.Link>
            <Nav.Link href="todo">TodoList</Nav.Link>
            <Nav.Link href="Controlcomponents">ControlCom</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
   
    </div>
    
  )
};

export default Layout;
