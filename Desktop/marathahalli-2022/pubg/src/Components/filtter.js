import React from "react";
function Fill(props){
    // const arr=[10,20,52,40,25,36]
    // const fal=arr.filter(item => item >25)
    const str=["mahi","pandu","navee","mahendra","bujji","baby"]
    // const name=str.filter(na => na.includes("b"))
    return(
        <div>
 {
    
    // fal.map(item => <li>{item}</li>)
    str.map(str => <li> {str}</li>)
 }

        </div>
    )
}
export default Fill;    