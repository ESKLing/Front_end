import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";

function App() {
  //to set the state below
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const fetchToDos = () => {
    axios.get("http://localhost:8080/todo").then((res) => {
      console.log(res);
      setToDos(res.data); //this sets the state as the data from this request
    });
  };

  // similar to component did mount
  useEffect(() => {
    fetchToDos();
  }, []);
  // can input a state item in the [] and if this changes it will automatically call that fetchToDos method(?)

  // function submitHandler(e) {
  //   e.preventDefault();
  // }

  function handleToDoChange(e) {
    setNewToDo(e.target.value);
  }

  function submitToDo() {
    axios
      .post(`http://localhost:8080/todo/addNew`, { name: newToDo })
      .then((res) => {
        console.log(res);
        // setToDos((toDos) => [...toDos, res.data]);
        // to add this new item to the current state and force a re-render
      });
  }

  function deleteToDo(toDoId, toDoName) {
    axios.delete(`http://localhost:8080/todo/${toDoId}/delete`).then((res) => {
      console.log("sucessfully deleted" + toDoName);
      setToDos(toDos.filter((toDo) => toDo.id !== toDoId));
      // updates the state to include all items except the deleted item (with the relevant id)
    });
  }

  function checkedToDo() {
    console.log("checked");
  }

  return (
    <div className="App">
      <AddToDo
        // submitHandler={submitHandler}
        submit={submitToDo}
        value={newToDo}
        onChange={handleToDoChange}
      />
      <ToDos toDos={toDos} delete={deleteToDo} checked={checkedToDo} />
    </div>
  );
}

export default App;
