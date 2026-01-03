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
import Impact from "../Component/Impact";
import DashboardLayout from "../LayOuts/DashboardLayOut";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
        // loader: () =>
        //   fetch("https://plate-share-api-server-delta.vercel.app/foods"),
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
          fetch(
            `https://plate-share-api-server-delta.vercel.app/food-request/${params.id}`
          ),
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
        path: "/impact",
        element: <Impact></Impact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyManageFoods></MyManageFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods-request",
        element: (
          <PrivateRoute>
            <MyFoodsRequest></MyFoodsRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(
            `https://plate-share-api-server-delta.vercel.app/foods/${params.id}`
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
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "manage-users",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
