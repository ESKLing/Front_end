import React from "react";
import "../App.css";

//functional component
const toDos = (props) => {
  return props.toDos.map((toDo, index) => {
    return (
      <div key={index} class="todo">
        <h1>{toDo.name}</h1>
        {/* <p>{toDo.id}</p> */}
        <button onClick={() => props.delete(toDo.id, toDo.name)}>delete</button>
      </div>
    );
  });
};

export default toDos;
