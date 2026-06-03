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
import { CrudUsersContext } from "./components/UsersCrud/ContextAPI/UsersContext";
import CrudAddNewUser from "./components/UsersCrud/NewUser";

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe",  email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

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

      <CrudUsersContext.Provider value={{ users, setUsers }}>
        <CrudAddNewUser/>
        <UsersCrud />
      </CrudUsersContext.Provider>

    </>
  );
}

export default App;
