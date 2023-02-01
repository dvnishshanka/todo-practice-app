import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { useState } from "react";
import Todo from "./models/Todo";
import "./App.css";

function App() {
  // const DUMMY_TODO_LIST = [
  //   new Todo("Learn React"),
  //   new Todo("Learn JavaScript"),
  // ];

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const onTodoAddHandler = (todo: string) => {
    const newTodoItem = new Todo(todo);
    setTodoList((prevState) => [newTodoItem, ...prevState]);
  };

  const onDeleteHandler = (todoId: string) => {
    setTodoList((prevState) => {
      const filteredArray = prevState.filter((item) => item.id !== todoId);
      return filteredArray;
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={onTodoAddHandler} />
      <Todos items={todoList} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
