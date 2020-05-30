import React from "react";
import "./Todo.css";

function Todo({ title, deleteTodo }) {
  return (
    <div className="todo">
      <h1 className="todo__header">{title}</h1>
      <h1 className="deleteX" onClick={deleteTodo}>X</h1>
    </div>
  );
}

export default Todo;
