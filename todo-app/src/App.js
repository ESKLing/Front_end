import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ToDos from "./components/ToDos";

function App() {
  //to set the state below
  const [toDos, setToDos] = useState([]);

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

  function saveToDo() {
    axios.post(`http://localhost:8080/todo/addNew`).then((res) => {
      console.log(res);
      setToDos((toDos) => [...toDos, res.data]);
      // to add this new item to the current state and force a re-render
    });
  }

  function deleteToDo(toDoId) {
    axios.delete(`http://localhost:8080/todo/${toDoId}/delete`).then((res) => {
      console.log(res);
      setToDos((toDos) => [...toDos, res.data]);
      // to add this new item to the current state and force a re-render
    });
  }

  return (
    <div className="App">
      <ToDos toDos={toDos} delete={deleteToDo} />
      <button onClick={saveToDo}>Add To Do</button>
    </div>
  );
}

export default App;
