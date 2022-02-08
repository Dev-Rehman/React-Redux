import React, { useState }  from 'react';
import "./todo.css";
import "./test.scss";
import { useDispatch } from 'react-redux';
// import { addTodo ,deleteTodo, removeTodo } from '../actions/index';
import { addTodo  } from '../actions/index';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
export const Todo = () => {
  
  const [ inputData , setInputData ] = useState('');

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
//  const dispatch = useDispatch();
     return (
  <>
       <>
         <div className="main-wrapper App-header">
         <div className="input-container ">
           <h1>Test Sass</h1>
                 <figure>
                   <figcaption>Add Your List here !</figcaption>
                 </figure>
                 <div className="addItem">
                    <input className="input-custom" value={inputData} 
                    onChange={(event)=> setInputData(event.target.value) } placeholder="Add Items."  type="text" />
                       {/* <i className='fa fa-plus add-btn'  onClick={()=>dispatch(addTodo) }/> */}
                 </div>

         </div>
         </div>
         
         <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </>
   </>
   )  
};
