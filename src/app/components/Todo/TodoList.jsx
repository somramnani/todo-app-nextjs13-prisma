"use client";
import Searchbar from "./Searchbar/Searchbar";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    const response = await fetch(`api/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete todo");
  };

  const removeItem = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const updateTODO = () => {
    console.log("clicked!");
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/todos", { method: "GET" });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetch Todo Data", data);
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const displayLists = (data) => {
    return (
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h1>{item.todo_item}</h1>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                updateTODO();
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Searchbar setTodo={setTodos} />

      {todos ? displayLists(todos) : "No Todo lists"}
    </div>
  );
};

export default Todo;
