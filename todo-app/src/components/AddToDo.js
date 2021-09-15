import React from "react";
import "../App.css";
import { BsPlus } from "react-icons/bs";

const addToDo = (props) => {
  return (
    <form
    // onSubmit={props.submitHandler}
    >
      <label>
        <input
          type="text"
          name="toDo"
          value={props.value}
          onChange={props.onChange}
        />
      </label>
      <button onClick={props.submit} class="add">
        <BsPlus />
      </button>
      {/* <input type="submit" value="Submit" onClick={props.submit} /> */}
    </form>
  );
};

export default addToDo;
