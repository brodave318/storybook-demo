import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
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

    if (input === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    console.log("e");
    let index = e.target.value;

    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div>
      <h1 class="heading">Todos</h1>

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

      <div className="todosPile">
        <TodoContainer todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
