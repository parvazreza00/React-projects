import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Root from './layout/Root.jsx';
import Home from './Page/Home/Home.jsx';
import About from './Page/About/About.jsx';
import ShopNow from './Page/ShopNow/ShopNow.jsx';
import Blog from './Page/Blog/Blog.jsx';
import Contact from './Page/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {index: true, element: <Home/> },
      {path:"/about", element: <About/>},
      {path:"/shopnow", element: <ShopNow/>},
      {path:"/blog", element: <Blog/>},
      {path:"/contact", element: <Contact/>},
    ]
  },
  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);