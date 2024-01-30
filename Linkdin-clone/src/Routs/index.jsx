import { createBrowserRouter, } from "react-router-dom";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        Linkdin Home page
      </div>,
    },
    {
        path: "login",
        element:<Login/>
    }
  ]);