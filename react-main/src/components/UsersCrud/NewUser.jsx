import React, { useState } from "react";

import { useUsersCrudContext } from "./Hooks/useUsersCrudContext";

const NewUser = () => {
  const { addUser } = useUsersCrudContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), name, email };
    addUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="card shadow-sm border-1 p-3">
          <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="col-md-5 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mt-4">
              <button type="submit" className="btn btn-primary mt-2">
                Add User
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
