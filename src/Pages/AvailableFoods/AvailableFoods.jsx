import React from "react";
import { useLoaderData } from "react-router";
import FoodsCard from "../../Component/FoodsCard";

const AvailableFoods = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((food) => (
          <FoodsCard food={food}></FoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
