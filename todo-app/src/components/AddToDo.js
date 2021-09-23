import React from "react";
import "../App.css";
import { BsPlus } from "react-icons/bs";

const addToDo = (props) => {
  return (
    <form>
      <label>
        <input
          type="text"
          name="toDo"
          value={props.value}
          onChange={props.onChange}
          maxLength={15}
        />
      </label>
      <button onClick={props.submit} class="add">
        <BsPlus />
      </button>
    </form>
  );
};

export default addToDo;
