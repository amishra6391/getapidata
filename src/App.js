import React, { useEffect, useState } from "react";
import './App.css'
const App=()=> {
  const [apidata, setApidata]=useState([]);
  async function apifunction(){
    try{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    setApidata(await data.json());
  }
  catch(error){
    document.write=`there is ${error}`
  }
  }
  useEffect(()=>{
    apifunction();
  },[]);
  return (
    <>
      <h1>List of member</h1>
      <div className="maindiv">
      
      {
       apidata.map((maindata)=>{
        console.log(typeof(maindata));
        const {id,name,username,email,address}=maindata;

        return(
        <>
        <div className="childediv">
          <div className="subchilde">
              <div className="id">ID:-{id} </div>
              <div className="name"><samp>Name:-</samp>{name}</div>
              <div className="username"><samp>Username:-</samp>{username}</div>
              <div className="email"><samp>Email:- </samp>{email}</div>
              <div className="email"><samp>Address:- </samp>{address.street},{address.city},{address.zipcode}</div>
          </div>
          </div>
        </>
        )
      })
        }
        </div>
        
      
    </>
  );
}

export default App;
