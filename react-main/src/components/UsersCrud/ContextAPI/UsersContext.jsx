import React, { createContext, useState } from "react";

export const CrudUsersContext = createContext();

const CrudUsersProvider = ({children}) => {
     const [users, setUsers] = useState([
    { id: 1, name: "John Doe",  email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

  return (
    <CrudUsersContext.Provider value={{ users, setUsers }}>
        {children}
    </CrudUsersContext.Provider>
  )

};
export default CrudUsersProvider