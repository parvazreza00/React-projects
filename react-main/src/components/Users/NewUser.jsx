import React, { useState } from "react";
import { useUsersContext } from "../Hooks/useUsersContext";

const NewUser = () => {

  const {setUsers} = useUsersContext()
  const [newuser, setNewuser] = useState("");

  const handleChange = (event) => {
    setNewuser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addednewuser = {
      id: new Date().getTime().toString(),
      username: newuser,
    };

    setUsers((prevUser) => [...prevUser, addednewuser]);

    setNewuser("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-2 d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="enter name"
                value={newuser}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-sm btn-primary ms-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
