import React, { useState ,useRef }  from 'react';
import "./todo.css";

import "./test.scss";
import {Provider, useDispatch} from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { addTodo ,deleteTodo, removeTodo } from '../actions/index';
import { addTodo  } from '../actions/index';
import store from '../store';
// import Component1 from './Component1';


export const Todo = () => {
  
  const [ inputData , setInputData ] = useState('');
  const [ InputDataHandler , setInputDataHandler ] = useState('');
    const inputRef = useRef(null);
    const DataHandler = useRef(null);

    function handleInput() {
      // inputRef.current.style.color="red";
      inputRef.current.style.display= "none";
  //  let  InputValue = inputRef.current.value;


    }
 const dispatch = useDispatch();
     return (
  <>

         <div className="main-wrapper App-header">
 
         <div className="input-container ">
                 <figure>
                   <figcaption>Add Your List here !</figcaption>
                 </figure>
                 <div className="addItem">
                   <input type="type"  placeholder="Add Items.."
                   value={inputData}
                   onChange={(e)=> setInputData(e.target.value)}
                   />
                       <i className='fa fa-plus add-btn'  onClick={()=>{dispatch(addTodo(inputData)) 
                      
                        
  console.log(store.getState().todoReducers.list)                        
                      
                      }}/>
                 </div>

         </div>
         <div>
           <input type="text"  ref={inputRef} />
           <button onClick={handleInput} >Press</button>
         </div>
         <div>

           <input type="text"  ref={DataHandler} />
           <button> Click Me </button>
         
         </div>
         
         </div>
    
 
   </>
   )  
};
