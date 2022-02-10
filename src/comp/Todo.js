import React, { useState ,useRef, useEffect }  from 'react';
import "./todo.css";

import "./test.scss";
import {useSelector, useDispatch} from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { addTodo ,deleteTodo, removeTodo } from '../actions/index';
import { addTodo,deleteTodo ,removeTodo } from '../actions/index';
import store from '../store';
// import { useSelector } from "react-redux";
// import Component1 from './Component1';


 export const Todo = () => {
  const [ inputData , setInputData ] = useState('');
  const list  = useSelector((state)=> state.todoReducers.list);
  const [ reduxInputData , setreduxInputData ] = useState([]);
  const [ InputDataHandler , setInputDataHandler ] = useState('');
    const inputRef = useRef(null);
    const DataHandler = useRef(null);

    function handleInput() {
      // inputRef.current.style.color="red";
      inputRef.current.style.display= "none";
      // let  InputValue = inputRef.current.value;
     }


    useEffect(() => {
     
    },[reduxInputData]);
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
                    <button className='fa fa-plus add-btn'  onClick={()=>{dispatch(addTodo(inputData)) 
                      setreduxInputData(store.getState().todoReducers.list)
                      setInputData('')
                      }}>Test </button>
                 </div>

         </div>
         <div>
           {reduxInputData.map((d,i)=> {
          return (
            <h1 key={i}>{d.data} <button className='fa fa-trash-alt add-btn'  onClick={()=>{dispatch(deleteTodo(d.id))}}>test</button></h1> 
            )
          }
           )}
           {/* <h1>
             {
               reduxInputData.map(Item => {
                return <h1>{Item}</h1> 
            })
             }
           </h1> */}
           {/* {reduxInputData ? 
            
          } */}
         </div>
         <div>
            <button  onClick={()=>{dispatch(removeTodo())}}> Remove All</button>
         </div>
         {/* <div>
           <input type="text"  ref={inputRef} />
           <but onClick={handleInput} >Press</but  ton>
         </div>
         <div>

           <input type="text"  ref={DataHandler} />
           <button> Click Me </button>
         
         </div> */}
         
         </div>
    
 
   </>
   )  
};

