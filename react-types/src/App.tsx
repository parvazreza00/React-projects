import { useState } from "react";

import "./App.css";

import User from "./components/User";
import Button from "./components/Button";
import Post from "./components/Post";
import ButtonStyle from "./components/ButtonStyle";


const users = [
  {
    id: 1,
    name: "Parvaz khan",
    age: 31,
    isRegister: true,
    lang: ["bangla", "english"],
  },

  {
    id:2, 
    name: "Reza khan",
    age: 34,
    isRegister: true,
    lang: ["bangla", "english"],
  },
];

const designButton = { 'backgroundColor':'green', padding:"10px", border:"2px solid yellow", fontSize:"25px", color:"white" }

function App() {
  return (
    <div className="container">
      <h1>Child Compontent</h1>
      {/* <Button>Child Click</Button> */}
      {/* <Post/> */}
      
      <ButtonStyle btnStyle={designButton}/>
      
    </div>
  );
}

export default App;
