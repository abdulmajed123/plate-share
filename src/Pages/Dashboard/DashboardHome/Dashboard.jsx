import React from "react";
import useRole from "../../../Hook/useRole";
import AdminDashboardHome from "./AdminDashboardHome";
import UserDashboardHome from "./UserDashboardHome";

const Dashboard = () => {
  const { role } = useRole();
  if (role === "admin") {
    return <AdminDashboardHome></AdminDashboardHome>;
  } else {
    return <UserDashboardHome></UserDashboardHome>;
  }
};

export default Dashboard;
