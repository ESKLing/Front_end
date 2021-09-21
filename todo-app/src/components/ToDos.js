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
          <span class="todo_name" onClick={() => props.toDoClicked(index)}>
            {toDo.name}
          </span>
          <BsFillTrashFill
            onClick={() => props.delete(toDo.id, toDo.name)}
            class="bin"
          />
        </h3>
        {!props.hidden[index] && (
          <span id="update">
            <input
              type="text"
              name="update"
              // value={props.value}
              onChange={(e) => props.onChange(e.target.value, toDo.id)}
            />
            <button onClick={() => props.update(toDo.id)}>update</button>
          </span>
        )}
      </div>
    );
  });
};

export default toDos;
