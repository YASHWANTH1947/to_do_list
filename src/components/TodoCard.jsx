import React, { useState } from "react";

export default function TodoCard({ todo, index, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todo);

  function toggleEdit() {
    setIsEditing((prev) => !prev);
    if (!prev) {
      // Save changes when exiting edit mode
      editTodo(index, newValue);
    }
  }

  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="w-full p-2 pl-10 text-lg text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span className="text-lg text-gray-700">{todo}</span>
      )}
      <div className="flex space-x-2">
        <button
          onClick={toggleEdit}
          className={`p-2 rounded-lg ${
            isEditing
              ? "bg-green-500 hover:bg-green-700 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          {isEditing ? "Save" : <i class="fa-solid fa-pen-to-square"></i>}
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="p-2 rounded-lg bg-red-500 hover:bg-red-700 text-white"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
