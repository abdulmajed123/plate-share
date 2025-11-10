import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOuts/MainLayOut";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AddFoods from "../Pages/AddFood/AddFoods";
import MyManageFoods from "../Pages/MyManageFoods/MyManageFoods";
import MyFoodsRequest from "../Pages/MyFoodsRequest/MyFoodsRequest";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

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
        loader: () => fetch("http://localhost:3000/foods"),
        element: (
          <PrivateRoute>
            <AvailableFoods></AvailableFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/food-details/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/add-food",
        element: <AddFoods></AddFoods>,
      },
      {
        path: "/manage-my-foods",
        element: <MyManageFoods></MyManageFoods>,
      },
      {
        path: "/my-foods-request",
        element: <MyFoodsRequest></MyFoodsRequest>,
      },
      {
        path: "/update-food/:id",
        element: <UpdateFood></UpdateFood>,
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
