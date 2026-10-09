import { createBrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Manufacture from "./Manufacture";
import Quality from "./Quality";
import Contact from "./Contact";
import Cart from "./Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "manufacture",
        element: <Manufacture />,
      },
      {
        path: "quality",
        element: <Quality />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      
    ],
  },
]);

export default router;