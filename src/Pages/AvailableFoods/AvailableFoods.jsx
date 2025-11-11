import React, { use } from "react";
import { useLoaderData } from "react-router";
import FoodsCard from "../../Component/FoodsCard";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const AvailableFoods = () => {
  const { loading } = use(AuthContext);
  const data = useLoaderData();

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-4xl font-bold mb-4 text-center  underline">
        Available Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((food) => (
          <FoodsCard food={food}></FoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
