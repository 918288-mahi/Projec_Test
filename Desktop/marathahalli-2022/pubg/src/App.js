import React from 'react';
import './App.css';
import Links from './Components/links'; 
import Slider from './Components/slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './Components/heading';
// import Form from './Components/forms';
// import Contact from './Components/contactpage';
// import Formvaliadtion from './Components/validation';
// import Formikvalidation from './Components/formik';
// import Formik2 from './Components/formik2';
// import User from './Components/axios';
// import Effact from './Components/useEffact';
// import Funvalidation from './Components/funvaliadtions';

import Footer from './Components/footer';
import Hoc from './Hoc fuctions/Hoc';
import Stateup from './Stateup';
import UsEffect from './usEffect';
import Reducer from './Reducer';





function App(props) {
  return (
    // <div className="App">
    <>
<Layout/>
  <Slider/>
   {/* <Links/> */}
   {/* <Stateup/> */}
   {/* <UsEffect/> */}
   <Reducer/>
 
   <Footer/>
  {/* <Form/> */}
{/* <Contact/> */}
{/* <Formvaliadtion /> */}
{/* < Formikvalidation/> */}
{/* <Formik2/>   */}
{/* <User/> */}
{/* <Effact/> */}
{/* <Funvalidation/> */}




</>
     
 )
  }
export default Hoc(App);

