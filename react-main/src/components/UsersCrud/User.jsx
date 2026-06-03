import React from "react";
import { useUsersCrudContext } from "./Hooks/useUsersCrudContext";

const User = ({ user }) => {
  const {deleteUser} = useUsersCrudContext();
  
  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <div className="col-md-6">
      <div className="card shadow border-1 mb-3 h-100">
        <div className="card-body text-center">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(user.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
