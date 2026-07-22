import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Root from './layout/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {index: true, element: <h1>Home page</h1>},
      {path:"/about", element:<h1>About page</h1>}
    ]
  },
  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);