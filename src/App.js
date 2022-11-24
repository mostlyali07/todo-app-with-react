import React from "react";
import Upperimg from "./notes.png";

const TodoApp = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={Upperimg} alt="" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
