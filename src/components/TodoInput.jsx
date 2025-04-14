import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [values, setValue] = useState("");
  return (
    <div className="todo-input">
      <input
        type="text"
        value={values}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
        className="text-3xl text-blue-600 border-2 p-3 mx-4"
      />
      <button
        type="button"
        className="bg-blue-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded text-3xl"
        onClick={() => {
          addTodo(values);
          setValue(""); // Clear the input field after adding a todo
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
