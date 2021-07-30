import React from "react";

//functional component
const ToDos = (props) => {
  return props.toDos.map((toDo, index) => {
    return (
      <div key={index}>
        <h1>{toDo.name}</h1>
        <p>{toDo.id}</p>
      </div>
    );
  });
};

export default ToDos;
