import { useState } from "react";

const Searchbar = ({ setTodo }) => {
  const [userInput, setUserInput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo_item: userInput }),
      });

      const result = await response.json();

      if (response.ok) {
        setTodo((prevTodos) => [...prevTodos, result]);
        setUserInput("");
      } else {
        console.error("Failed to add todo:", result.message || result.error);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const clearInputField = (e) => {
    setUserInput("");
  };

  return (
    <div>
      <input
        placeholder="Add to list"
        type="text"
        value={userInput}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add to List</button>
      <button onClick={clearInputField}>Clear</button>
    </div>
  );
};

export default Searchbar;
