// I want to move this code into this component
import React, { useState } from "react";

// import { FaWindowClose, FaRegEdit } from "react-icons/fa";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue
}) => {
  return todos.map((todo) => (
    <div className="todo-row">
      {editId === todo.id ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <div
          key={todo.id}
          className={todo.isComplete ? "complete" : ""}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.firstName}
        </div>
      )}
      {editId === todo.id ? (
        <button onClick={() => editTodo(todo.id, inputValue)}>Edit todo</button>
      ) : (
        <>
          {/* <FaWindowClose onClick={() => removeTodo(todo.id)} /> */}
          <button onClick={() => handleEditChange(todo.id, todo.firstName)}>Edit</button>
        </>
      )}
    </div>
  ));
};

export default Todo;
