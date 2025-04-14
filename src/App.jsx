import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todoList")) || [
    "go to gym",
    "go to work",
    "go to sleep",
    "go to eat",
  ];
  const [todoList, setTodoList] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(todo) {
    setTodoList((prevTodos) => [...prevTodos, todo]);
  }

  function deleteTodo(index) {
    setTodoList((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  function editTodo(index, newValue) {
    setTodoList((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? newValue : todo))
    );
    console.log("edit todo is run");
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todoList} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}
