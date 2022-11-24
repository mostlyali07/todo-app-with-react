import React from "react";
import "./App.css";
import Upperimg from "./images/notes.png";

const TodoApp = () => {
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
                  />
                  <label for="floatingInput">Enter Items Here</label>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                  <i class="fa-solid fa-folder-plus"></i>
                </button>
              </div>

              <div className="showItems">
                <div className="eachItems">
                  <h3>Shantu</h3>
                  <i class="fa-solid fa-trash"></i>
                </div>
              </div>
              <button type="submit" class="btn btn-danger mb-3">
                Delete All <i class="fa-solid fa-delete-left"></i>
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
