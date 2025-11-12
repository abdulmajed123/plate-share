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
import FoodRequestTable from "../Pages/foodRequestTable/FoodRequestTable";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/available-foods",
        loader: () => fetch("http://localhost:3000/foods"),
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food-request/${params.id}`),
      },
      {
        path: "/food-request-table",
        element: <FoodRequestTable></FoodRequestTable>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <MyManageFoods></MyManageFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods-request",
        element: <MyFoodsRequest></MyFoodsRequest>,
      },
      {
        path: "/update-food/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
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
