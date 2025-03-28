"use client";
import Todo from "./components/Todo/TodoList";
import { useState, useEffect } from "react";
import { queryAllData, queryAllTodoItem } from "../utils/getQueryOutput";
import { createTodo } from "../utils/createTodo";
import { updateTodo } from "../utils/updateTodo";
import { deleteTodo } from "../utils/deleteTodo";

const HomePage = () => {
  // const todoItem = "Shower";
  // const queryAllOutput = await queryAllData();
  // const queryAllTodoItemOutput = await queryAllTodoItem();
  // const createTodoResult = await createTodo(todoItem);

  // const deleteTodoResult = await deleteTodo(33);
  // console.log("Deleted Result", JSON.stringify(deleteTodoResult, null, 2));

  // console.log("Create new todo", JSON.stringify(createTodoResult, null, 2));
  // console.log("All from database", JSON.stringify(queryAllOutput, null, 2));
  // console.log(
  //   "All Todo's from database",
  //   JSON.stringify(queryAllTodoItemOutput, null, 2)
  // );

  // const fetchUpdatedData = async () => {
  //   const updatedTodoResult = await updateTodo();
  //   console.log("Updated Result", JSON.stringify(updatedTodoResult, null, 2));
  // };
  // useEffect(() => {
  //   fetchUpdatedData();
  // }, []);
  // const addTodoResult = async () => {
  //   const createTodoResult = await createTodo("Basketball");
  //   console.log("Create new todo", JSON.stringify(createTodoResult, null, 2));
  // };
  // const deleteTodoData = async () => {
  //   const deleteTodoResult = await deleteTodo();
  //   console.log("Deleted Result", JSON.stringify(deleteTodoResult, null, 2));
  // };

  // const deleteTodoData3 = async () => {
  //   try {
  //     console.log("Attempting to delete todo...");
  //     const deleteTodoResult = await deleteTodo();
  //     console.log("Deleted Result", JSON.stringify(deleteTodoResult, null, 2));
  //   } catch (error) {
  //     console.error("Error in deleteTodoData:", error);
  //   }
  // };
  // useEffect(() => {
  //   deleteTodoData();
  //   deleteTodoData3();
  //   addTodoResult();
  // }, []);
  //

  // const [todos, setTodos] = useState([]);

  // console.log("Todo:", todos[0].todo_item);
  return <Todo />;
};

export default HomePage;
