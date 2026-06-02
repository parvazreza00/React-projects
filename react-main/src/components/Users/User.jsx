import React from "react";

import { useUsersContext } from "../Hooks/useUsersContext";

const User = ({ user }) => {
  const { users, setUsers } = useUsersContext();

  const handleDelete = (id) => {
    const filterUsers = users.filter((user) => user.id != id);
    setUsers(filterUsers);
  };

  return (
    <div className="col-md-6">
      <div className="card shadow-sm border-1 h-100">
        <div className="card-body text-center">
          <h5 className="card-title">User #{user.id}</h5>
          <p className="card-text fs-4 fw-bold">{user.username}</p>
          <button
            className="btn btn-sm btn-danger rounded-4"
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
