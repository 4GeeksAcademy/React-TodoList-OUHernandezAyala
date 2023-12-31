import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTodo = {
        id: Date.now().toString(),
        value: taskInput,
      };
      setTodos([...todos, newTodo]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
    const mouseEnter = (id) => {
      const updatedTodos = todos.map((item) => {
        return {
          ...item,
          showButton: item.id === id,
        };
      });
      setTodos(updatedTodos);
    };
    
    const mouseLeave = () => {
      const updatedTodos = todos.map((item) => {
        return {
          ...item,
          showButton: false,
        };
      });
      setTodos(updatedTodos);
    };
    

  return (
    <div className="contenedorTodolist">
      <div className="tittleTodos">todos</div>
      <div className="form-floating">
        <label className="floatingTextarea2" htmlFor="taskInput"></label>
        <input
          className=""
          type="text"
          id="taskInput"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <ul>
          {todos.length === 0 ? (
            <li>No Task</li>
          ) : (
            todos.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => mouseEnter(item.id)}
                onMouseLeave={() => mouseLeave(item.id)}
              >
                {item.value}
                {item.showButton && (
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(item.id)}
                  >
                    X
                  </button>
                )}
              </li>
            ))
          )}
          <div className="counter">{todos.length} item</div>
        </ul>
      </div>
    </div>
  );
};

export default Todo;