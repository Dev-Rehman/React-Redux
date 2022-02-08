import React from 'react';
import { useState, createContext, useContext } from "react";
import { UserContext } from './Component1';
export default function Component5() {

    const user = useContext(UserContext); 
  return <div>
      Hello  World !
      <h2>{`Hello ${user} again!`}</h2>
  </div>;
}
