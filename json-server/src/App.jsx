import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h1>json-server </h1>
      {
        users.map((user)=>{
          return (
            <article>
            <h2>Name : {user.name}</h2>
            <p>Email: {user.email}</p>
          </article>
          )
        })
      }
    </div>
  );
}

export default App;
