import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1; 
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Counter - {count}</h4>
      <button type="submit" onClick={()=>dispatch("increment")}>Increment </button>
      <button type="submit" onClick={()=>dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default Counter;
