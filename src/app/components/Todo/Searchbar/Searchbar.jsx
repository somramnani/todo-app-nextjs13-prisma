import { useState } from "react";

const Searchbar = ({ setTodo }) => {
  const [userInput, setUserInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((prevTodos) => [...prevTodos, userInput]);
    setUserInput("");
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
