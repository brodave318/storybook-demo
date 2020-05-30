import React, { useEffect, useState } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    console.log(input);
    setInput("");
  };

  return (
    <div>
      <h1>Hello World!</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add TODO
        </button>
      </form>

      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
