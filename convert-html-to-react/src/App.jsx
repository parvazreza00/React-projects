import Header from "./common/Header";
import Footer from "./common/Footer";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="container my-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
