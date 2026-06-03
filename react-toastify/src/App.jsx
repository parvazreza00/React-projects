import { useState } from "react";
import "./App.css";
import ToastMessage from "./components/toast/ToastMessage";
import Countries from "./components/countryApp/Countries";

function App() {
  return (
    <div className="container">
      {/* <ToastMessage/> */}
      <Countries />
    </div>
  );
}

export default App;
