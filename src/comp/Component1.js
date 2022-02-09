import React from 'react';
import { useState, createContext, useContext , useEffect } from "react";
import Component2 from './Component2';

export  const UserContext = createContext();

    
export default function Component1() {
    


    const [data, setData] = useState([]);
    const [InputData, setInputData] = useState();
    const [user, setUser] = useState("Abdul Rehman");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(
        response => response.json()
    )
    .then(json => setData(json));
      });


    return (
        <UserContext.Provider value={InputData}>
          <h1>{`Hello ${user}!`}</h1>
          <h1>{`Hello ${data.title}!`}</h1>
          {/* <h1>{InputData}</h1> */}
          <input placeholder='placeholder' value={InputData} onChange={(e)=> setInputData(e.target.value)} ></input>
          <Component2 user={user} />
        </UserContext.Provider>
      );
  
}
