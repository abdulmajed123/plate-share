import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import MyFoodCard from "../MyFoodCard/MyFoodCard";
import Loading from "../Loading/Loading";

const MyManageFoods = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://plate-share-api-server-delta.vercel.app/my-foods?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex flex-col gap-5 py-10">
      {myFoods.map((food) => (
        <MyFoodCard food={food}></MyFoodCard>
      ))}
    </div>
  );
};

export default MyManageFoods;
