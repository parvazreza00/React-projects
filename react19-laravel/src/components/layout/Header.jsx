import { Navigation } from "./Navigation";
import { Button } from "../UI/Button";

function Header() {
  return (
    <>
      <h1>Hey this is Header components.</h1>
      <Navigation />
      <Navigation />
      <Navigation />
      <Button/>
      <Button label="Submit"/>
    </>
  );
}

export default Header;
