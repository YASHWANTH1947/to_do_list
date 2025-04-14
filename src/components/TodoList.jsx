import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass editTodo as a prop
        /> // Pass the index as a prop
      ))}
    </ul>
  );
}
