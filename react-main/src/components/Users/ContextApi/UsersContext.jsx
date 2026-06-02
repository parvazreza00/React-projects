import React, { createContext, useState } from "react";

export const UsersContext = createContext({});

const UserProvider = ({ children }) => {
  const allUsers = [
    { id: 1, username: "Hasan" },
    { id: 2, username: "Tomal" },
  ];
  const [users, setUsers] = useState(allUsers);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
