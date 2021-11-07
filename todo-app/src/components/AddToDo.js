import React from "react";
import "../App.css";
import { BsPlus } from "react-icons/bs";

const addToDo = (props) => {
  return (
    <form>
      <label>
        <input
          class="input"
          type="text"
          name="toDo"
          placeholder="Buy bread"
          value={props.value}
          onChange={props.onChange}
          maxLength={15}
        />
      </label>
      {props.value.length >= 1 && (
        <button onClick={props.submit} class="add">
          <BsPlus />
        </button>
      )}
    </form>
  );
};

export default addToDo;
