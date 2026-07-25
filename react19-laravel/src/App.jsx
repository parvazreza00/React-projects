import "./App.css";
import {UserCard} from "./components/feature/UserCard";
import Header from "./components/layout/Header";
import { Button } from "./components/UI/Button";
import { Counter } from "./components/feature/Counter";
import { Posts } from "./components/feature/Posts";
import { Registration } from "./components/feature/Registration";
import { Uncontrolled } from "./components/feature/Uncontrolled";

function App() {

  // const name = "Programming Feilds";
  // const technology = "Reactjs";

  // const user = {
  //   name:"Programming Feilds",
  //   technology:"Full stack developer"
  // }

  // const showAlert = () =>{
  //   alert("Please-Read Hello Reactjs!")
  // }

  return (
    <>
      {/* <Header />
      <h1>Hello React19-Laravel</h1> */}
      {/* <UserCard name={name} technology={technology}/>
      <UserCard />
      <UserCard name={user.name} technology={user.technology}/>

      <Button label="Submit" handleClick={showAlert}/> */}

      {/* <Counter/> */}
      {/* <Posts/> */}
      <Registration/>
      <Uncontrolled/>

    </>
  );
}

export default App;
