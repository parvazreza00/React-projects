import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import NotFound from "./components/NotFound";
import Navbar from "./components/layout/Navbar";
import SingIn from "./components/pages/SingIn";
import Porfile from "./components/pages/Porfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
       {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/profile",
        element: <Porfile />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
