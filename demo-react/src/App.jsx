import "./App.css";
import Card from "./components/Card/Card";
import Data from "./../public/data.json";
import { v4 as uuidv4 } from "uuid";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";

import Introduction from "./components/Introductions/Introduction";
import Card2 from "./components/ClassComponents/Card2";
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap";
import Home from "./components/TodoApp2/Home";

function App() {
  return (
    <div className="container mt-0 mb-0">
      <Introduction />

      {/* <div className="social-icon py-2 bg-warning mb-2 text-center">
        <FaFacebook className="facebook fs-4 text-danger me-2" title="FaceBook"/>
        <FaYoutube className="youtube fs-4 text-danger me-2" title="Youtube" />
        <BsCardList className="list fs-4 text-danger me-2" title="List" />
        <FiBookOpen className="book fs-4 text-danger me-2" title="Book" />
      </div> */}

      {/* <Card2 name="class-component"/> */}

      {/* card component */}
      {/* <div className="row">
        {Data.map((item, index) => (
          <div
            className="cos-sm-12 col-md-4 col-lg-4 col-xl-4  mb-4"
            key={uuidv4()}
          >
            <Card item={item} index={index} />
          </div>
        ))}
      </div> */}
      {/* end card component */}

      {/* <ReactBootstrap/> */}
      <Home />
    </div>
  );
}

export default App;
