import React from "react";
import { useFormik } from "formik";

   
function Formikvalidation(){        
    
    const formik= useFormik({
        initialValues:{
            name:"",
            email:"",
            password:''
        },
        onSubmit:(values)=>{
            console.log("values in ",values)
            // alert(JSON.stringify(values, null, 2));  
        },
        validate:(values)=>{
            let errors={};
            if(!values.name){
                errors.name="please enter name"
            } 
            
           else if(!values.email){
                errors.email="please enter email"
            }
  
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            else if(!values.password){
                errors.password="please enter password"
            }
            else  if(!/^[0-9]/i.test(values.password)){
                errors.password="please enter only numbers"
            }
           
            else{
                alert("form submit")
            }
          
            return errors
        }
    })
   
    




    return(
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="text" 
                            name="name" 
                            onChange={formik.handleChange} 
                            value={formik.values.name} 
                        />
                        { formik.errors.name ? <div className="error" style={{color:"red"}}>{formik.errors.name}</div> : null}
                        </div>

                        <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={formik.handleChange} 
                            value={formik.values.email} 
                        />
                        {  formik.errors.email ? <div className="error" style={{color:"red"}}>{formik.errors.email}</div> : null}
                        </div>


                        <div className="form-control">
                        <label htmlFor="password">password</label>
                        <input 
                            type="text" 
                            id="text" 
                            name="password" 
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />

                         { formik.touched.email && formik.errors.password ? <div className="error" style={{color:"red"}}>{formik.errors.password}</div> : null}<br/><br/>
                        <button type="submit">Register</button>
                        </div>
                        </form>
    )


}
export default Formikvalidation;
