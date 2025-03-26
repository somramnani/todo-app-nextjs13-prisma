"use client";
import Searchbar from "./Searchbar/Searchbar";
import Lists from "./Lists/Lists";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const displayLists = (data) => {
    return (
      <div>
        {data.map((item) => {
          return <Lists todo={todo} setTodo={setTodo} item={item} />;
        })}
      </div>
    );
  };

  return (
    <div>
      <Searchbar setTodo={setTodo} />

      {todo ? displayLists(todo) : "No Todo lists"}
    </div>
  );
};

export default Todo;
