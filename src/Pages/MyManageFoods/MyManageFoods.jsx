import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import MyFoodCard from "../MyFoodCard/MyFoodCard";

const MyManageFoods = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-foods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyFoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  console.log(myFoods);
  return (
    <div>
      {myFoods.map((food) => (
        <MyFoodCard food={food}></MyFoodCard>
      ))}
    </div>
  );
};

export default MyManageFoods;
