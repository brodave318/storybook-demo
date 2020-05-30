import React from "react";
import TodoContainer from "../TodoContainer";

export default {
  title: "TodoContainer",
  component: TodoContainer,
};

export const NormalTodoContanier = () => (
  <TodoContainer todos={["Teach REACT", "Take dogs out", "Play Guitar"]} />
);
