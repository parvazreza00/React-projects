import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import NewTodo from "./NewTodo";


const Home = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {   
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodo) => {
      const filteritem = prevTodo.filter((item) => item.id != id);
      return filteritem;
    });
  };

  return (
    <div>
      <NewTodo onAddNewTodo={addNewTodo} />
      <Todos todos={todos} onHandleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
