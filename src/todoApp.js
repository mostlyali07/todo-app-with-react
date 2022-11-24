import React, {useState} from "react";
import "./App.css";
import Upperimg from "./images/notes.png";

const TodoApp = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const addItem =() =>{

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="main_div">
              <figure>
                <img src={Upperimg} alt="Notes" className="notes" />
                <figcaption>Add Todo List Here 👇</figcaption>
              </figure>
              <div className="addItems">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Enter Items Here</label>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={addItem}>
                  <i className="fa-solid fa-folder-plus"></i>
                </button>
              </div>

              <div className="showItems">
                <div className="eachItems">
                  <h3>Shantu</h3>
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
              <button type="submit" className="btn btn-danger mb-3">
                Delete All <i className="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
