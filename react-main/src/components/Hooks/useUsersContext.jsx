import { useContext } from "react";

import { UsersContext } from "../Users/ContextApi/UsersContext";

export const useUsersContext = () => {
    return useContext(UsersContext);
}