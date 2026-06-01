import React, { useState } from "react";
import Component2 from "./Component2";

import { userContext } from "./UserContex";

const Component1 = () => {
  const [user, setUser] = useState({ id: 1001, name: "Hasan Parvaz" });
  const [text, setText] = useState("Hello React js! You are so nice for user interactivity!");
  return (
    <div>
      <userContext.Provider value={{ user, text }}>
        <Component2 />
      </userContext.Provider>
    </div>
  );
};

export default Component1;
