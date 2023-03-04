import React from "react";
import { Formik, useFormik } from "formik";

const initialValues = {
    username:"",
    password:""
}
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
}
    
const validate = values =>{
    let errors={};
    if(!values.username){
        errors.username="please enter username"
    }
    
    if(!values.password){
        errors.password="please enter password"
    }
    //  else if(!values.password ){
    //     errors.password="password must on should be min 5 max 10"
    // }

    return errors
}


function Formik2(){
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate

    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <label>Username</label>
                <input type="text" name="username" placeholder="username" value={formik.values.username}  onChange={formik.handleChange}/><br/>
                { formik.errors.username ? <div className="error" style={{color:"red"}}>{formik.errors.username}</div> : null}
 
                <label>password</label>
                <input type="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange}/><br/>
                {formik.errors.password ? <div  className="error" style={{color:"red"}}>{formik.errors.password}</div>:null}
                <button  type="submit">LOGIN</button>

            </form>
        </div>
    )
}
export default Formik2;