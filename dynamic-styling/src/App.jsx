import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const isActive = true;
  const darkMode = true;
  const isLarge = false;
  const textSize = 50;

  return (
    <div className="container mt-4">
      {/* <input
        type="text"
        value={name}
        onChange={handleChange}
        className={`form-control ${validInput ? "bg-success" : "bg-danger"}`}
      /> */}
      {/* <button className={isActive ? "btn btn-success" : "btn btn-dark"}>Click Me</button> */}
      {/* <button style={{ backgroundColor: isActive ? 'green':"black",
        color:isActive?'white':'blue'
        }}>Click me</button> */}
      {/* <p
        className={`py-3 ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}
    ${isLarge ? "fs-1" : "fs-5"}
    `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        accusamus.
      </p> */}
      <p style={{ fontSize: `${textSize}px` }}>Hello React</p>
    </div>
  );
}

export default App;
