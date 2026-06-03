import { useState } from "react";

import UseReff from "./components/Hooks/useRef/UseReff";
import UseReducer from "./components/Hooks/useReducer/UseReducer";
import Counter from "./components/Hooks/useReducer/Counter";
import ComplexCounter from "./components/Hooks/useReducer/ComplexCounter";
import Component1 from "./components/propsDrilling/Component1";
import Users from "./components/Users/Users";
import NewUser from "./components/Users/NewUser";
import UserProvider from "./components/Users/ContextApi/UsersContext";


import UsersCrud from "./components/UsersCrud/Users";
import CrudUsersProvider from "./components/UsersCrud/ContextAPI/UsersContext";
import CrudAddNewUser from "./components/UsersCrud/NewUser";

function App() {
 

  return (
    <>
      {/* <UseReff/> */}

      {/* <UseReducer/> */}
      {/* <Counter/> */}
      {/* <ComplexCounter/> */}
      {/* <Component1/> */}

      {/* <UserProvider>
        <NewUser />
        <Users />
      </UserProvider> */}

      <CrudUsersProvider>
        <CrudAddNewUser/>
        <UsersCrud />
      </CrudUsersProvider>

    </>
  );
}

export default App;
