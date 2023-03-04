import React from 'react';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './heading';
import About from './about';
import Home from './home';
import Count from './Hook';
import Counter from '../reduxfiles/counter';
import Mobiles from '../Addcartitems/mobiles';
import Addcart from '../Addcartitems/addcart';
import User from './axios';
import Formvaliadtion from './validation';
import Todo from '../Todofiles/todo';
import Controlcomponents from '../Hoc fuctions/Controlcomponents';



function Links() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
     
        {/* <Route exact path="/" element={<Layout/>} /> */}
        <Route exact path="/" element={<Home/>} />
       
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Hook" element={<Count/>} />    
        <Route exact path="/counter" element={<Counter/>} />     
        <Route exact path="/mobiles" element={<Mobiles/>} />  
        <Route exact path="/addcart" element={<Addcart/>} />  
        <Route exact path="/axios" element={<User/>} />  
        <Route exact path="/validation" element={<Formvaliadtion/>} />  
        <Route exact path="/todo" element={<Todo/>} />  
        <Route exact path="/Controlcomponents" element={<Controlcomponents/>} />
       
      </Routes>
    </BrowserRouter>

    </div>
   
  );
}

export default Links;

