"use client";
import Searchbar from "./Searchbar/Searchbar";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    console.log(id);
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

  const fetchTodoPUT = async (id, updatedPrompt) => {
    try {
      const response = await fetch(`api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updated_prompt: updatedPrompt }),
      });

      const result = await response.json();
      if (response.ok) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, ...result } : todo
          )
        );
      } else {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const updateTODO = async (id) => {
    console.log("clicked!");
    const updatedPrompt = prompt("Enter updated list");
    if (updatedPrompt !== null) {
      fetchTodoPUT(id, updatedPrompt);
    }
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
                updateTODO(item.id);
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
