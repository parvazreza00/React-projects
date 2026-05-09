import React, { useState } from "react";

import {v4 as uuidv4} from 'uuid'

import Todos from "./Todos";
import NewTodo from "./NewTodo";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "Todo title one",
//     description: "Todo title description here ....",
//   },
//   {
//     id: 2,
//     title: "Todo title two",
//     description: "Todo title description here ....",
//   },
//   {
//     id: 3,
//     title: "Todo title Three",
//     description: "Todo title description here ....",
//   },
// ];

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo)=>{
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo} ];
    });
    // console.log(todos);
  }

  const handleRemoveTodo = (id) =>{
    // alert(id);   
    setTodos((prevTodos) => {
       const filteredTodos = prevTodos.filter((todo) => todo.id != id);
       return filteredTodos;
    });
  }

  return (
    <div className="card w-50 m-auto">
       <NewTodo onAddTodo= {handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;
