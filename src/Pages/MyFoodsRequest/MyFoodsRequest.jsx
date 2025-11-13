import React, { use, useEffect, useState } from "react";
import { data } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";
import { div } from "framer-motion/client";
import FoodRequestCard from "../FoodRequestCard/FoodRequestCard";

const MyFoodsRequest = () => {
  const { user } = use(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://plate-share-api-server-delta.vercel.app/my-request?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequests(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);
  console.log(requests);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-5">My Request Foods</h2>
      <div className="py-5">
        {requests.map((request) => (
          <FoodRequestCard request={request}></FoodRequestCard>
        ))}
      </div>
    </div>
  );
};

export default MyFoodsRequest;
