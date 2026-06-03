import React, { createContext, useReducer } from "react";

export const CrudUsersContext = createContext();

const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id != action.payload,
      );
      return {
        ...state,
        users: filteredUsers,
      };

    default:
      return state;
  }
};

const CrudUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };

  return (
    <CrudUsersContext.Provider value={value}>
      {children}
    </CrudUsersContext.Provider>
  );
};
export default CrudUsersProvider;
