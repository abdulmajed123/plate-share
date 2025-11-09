import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOuts/MainLayOut";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/available-foods",
        element: (
          <PrivateRoute>
            <AvailableFoods></AvailableFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
