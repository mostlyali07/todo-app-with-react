import React from 'react';
import './App.css';
import Upperimg from './images/notes.png';

const TodoApp = () => {
  return (
    <>
       <div className="main_div">
        <div className="child-div">
            <figure>
                <img src={Upperimg} alt="Notes" className="notes" />
            </figure>
        </div>
        </div> 
    </>
  )
}

export default TodoApp