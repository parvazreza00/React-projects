import { useState } from "react";

import UseReff from "./components/Hooks/useRef/UseReff";
import UseReducer from "./components/Hooks/useReducer/UseReducer";
import Counter from "./components/Hooks/useReducer/Counter";
import ComplexCounter from "./components/Hooks/useReducer/ComplexCounter";
import Component1 from "./components/propsDrilling/Component1";
import Users from "./components/Users/Users";
import NewUser from "./components/Users/NewUser";
import UserProvider from "./components/Users/ContextApi/UsersContext";

function App() {

  return (
    <>
      {/* <UseReff/> */}

      {/* <UseReducer/> */}
      {/* <Counter/> */}
      {/* <ComplexCounter/> */}
      {/* <Component1/> */}

      <UserProvider>
        <NewUser />
        <Users />
      </UserProvider>
    </>
  );
}

export default App;
