import React from "react";

const addToDo = (props) => {
  return (
    <form>
      <label>
        To do:
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
