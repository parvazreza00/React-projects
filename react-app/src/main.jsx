import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Body from "./components/body/Body.jsx";
import Home from "./components/body/Home.jsx"
import Menu from "./components/body/Menu.jsx"
import About from "./components/body/About.jsx"
import Contact from "./components/body/Contact.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Body />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
