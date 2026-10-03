import { createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Manufacture from "./components/Manufacture";
import Quality from "./components/Quality";
import Contact from "./components/Contact";

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
    ],
  },
]);

export default router;