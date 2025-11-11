import React from "react";
import Banner from "../../Component/Banner";
import HowItWorksCard from "../../Component/HowItWorksCard";
import OurMission from "../../Component/OurMission";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
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
