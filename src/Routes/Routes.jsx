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
import DashboardHome from "../Pages/Dashboard/DashboardHome/UserDashboardHome";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AdminProfile from "../Pages/AdminProfile/AdminProfile";
import ManageFoods from "../Pages/Dashboard/ManageFoods/ManageFoods";
import Dashboard from "../Pages/Dashboard/DashboardHome/Dashboard";
import RequestFood from "../Pages/RequestFood/RequestFood";
import PrivacyPolicy from "../Pages/PravacyPolicy/PravacyPolicy";

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
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/food-details/:id",
        element: <FoodDetails></FoodDetails>,
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
        path: "/impact",
        element: <Impact></Impact>,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },

      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "my-foods-request",
        element: <MyFoodsRequest></MyFoodsRequest>,
      },
      {
        path: "request-food",
        element: <RequestFood></RequestFood>,
      },
      {
        path: "my-foods",
        element: <MyManageFoods></MyManageFoods>,
      },
      {
        path: "manage-users",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manage-foods",
        element: <ManageFoods></ManageFoods>,
      },
      {
        path: "user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "admin-profile",
        element: <AdminProfile></AdminProfile>,
      },
    ],
  },
]);

export default router;
