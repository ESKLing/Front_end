import React from "react";
import "../App.css";
import { BsFillTrashFill } from "react-icons/bs";

//functional component
const toDos = (props) => {
  return props.toDos.map((toDo, index) => {
    return (
      <div key={index} class="todo">
        <h3>
          <input type="checkbox" onClick={props.checked} />
          {toDo.name}
          <BsFillTrashFill
            onClick={() => props.delete(toDo.id, toDo.name)}
            class="bin"
          />
        </h3>
      </div>
    );
  });
};

export default toDos;
