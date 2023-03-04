import React, { useState, useEffect } from 'react';

export default function UsEffect() {
  const[data,setData]=useState([])
  const[searchData,setserachdata]=useState("")

  useEffect(() => {
    fetdata();
  }, []);

  async function fetdata() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
     setData(json)
  }

  const filteredData = searchData ? data.filter((item) => item.name.toLowerCase().includes(searchData.toLowerCase())) : data;

  return (
    <>
    <div>
        <input type="text" value={searchData} onChange={(e)=>setserachdata(e.target.value)}/>
      <ul type="none">
       {
          filteredData.map((item, index) => (
            <li key={index}>{item.name}</li>
          )
        
        )}
        </ul>
        </div>
    </>
  );
}
