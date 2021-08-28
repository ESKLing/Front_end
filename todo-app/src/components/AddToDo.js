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
          //   onChange={(e) => console.log("Val:", e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" onClick={props.add} />
    </form>
  );
};

export default addToDo;
