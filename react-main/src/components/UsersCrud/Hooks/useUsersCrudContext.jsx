import { useContext } from "react";
import { CrudUsersContext } from "../ContextAPI/UsersContext";

export const useUsersCrudContext = ()=>{
    return useContext(CrudUsersContext);
}