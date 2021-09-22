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

          {/* will show this component when the value of the 'show' state at the
        index is false */}
          {!props.showUpdate[index] && (
            <span class="todo_name" onClick={() => props.toDoClicked(index)}>
              {toDo.name}
            </span>
          )}

          {/* will show this update component when the value of the 'show' state at the
        index is true */}
          {props.showUpdate[index] && (
            <span>
              <input
                type="text"
                name="update"
                // defaultValue={toDo.name}
                onChange={(e) => {
                  props.onChange(e.target.value, toDo.id);
                }}
                id="update"
              />
              <button onClick={() => props.update(toDo.id)}>update</button>
            </span>
          )}

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
