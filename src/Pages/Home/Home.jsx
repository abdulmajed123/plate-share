import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner";
import HowItWorksCard from "../../Component/HowItWorksCard";
import OurMission from "../../Component/OurMission";
import FoodsCard from "../../Component/FoodsCard";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/highest-foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(foods);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-4 text-center mt-10">
          Highest Quantity Foods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-5">
          {foods.map((food) => (
            <FoodsCard food={food}></FoodsCard>
          ))}
        </div>
      </section>
      <section>
        <HowItWorksCard></HowItWorksCard>
      </section>
      <section>
        <OurMission></OurMission>
      </section>
    </div>
  );
};

export default Home;
