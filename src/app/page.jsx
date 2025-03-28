"use client";
import Todo from "./components/Todo/TodoList";
import { useState, useEffect } from "react";
import { queryAllData, queryAllTodoItem } from "../utils/getQueryOutput";
import { createTodo } from "../utils/createTodo";
import { updateTodo } from "../utils/updateTodo";
import { deleteTodo } from "../utils/deleteTodo";

const HomePage = () => {
  return <Todo />;
};

export default HomePage;
