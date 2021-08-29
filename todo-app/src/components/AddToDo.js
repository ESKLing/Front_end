import React from "react";
import "../App.css";

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
      <input type="submit" value="Submit" onClick={props.submit} />
    </form>
  );
};

export default addToDo;
