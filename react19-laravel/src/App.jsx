import "./App.css";
import {UserCard} from "./components/feature/UserCard";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      {/* <Header />
      <h1>Hello React19-Laravel</h1> */}
      <UserCard name="Programming Feilds" technology="Reactjs"/>
      <UserCard />
    </>
  );
}

export default App;
