import React, { useContext } from "react";
import { counterContex } from "./Counter";

const ComponentB = () => {
  const contex = useContext(counterContex);
  return (
    <div>
      <p>Component A</p>
      <button
        type="submit"
        onClick={() => contex.countDispatch("increment")}
      >
        Increment
      </button>
      <button
        type="submit"
        onClick={() => contex.countDispatch("decrement")}
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
