import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner";
import HowItWorksCard from "../../Component/HowItWorksCard";
import OurMission from "../../Component/OurMission";
import FoodsCard from "../../Component/FoodsCard";
import Loading from "../Loading/Loading";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://plate-share-api-server-delta.vercel.app/highest-foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-4 text-center mt-10">
          Highest Quantity Foods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-20 py-5">
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
