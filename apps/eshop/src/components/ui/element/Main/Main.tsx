import React from "react";
import Hero from "../../features/Hero/Hero";
import Services from "../../features/OurServices/Services";
import OurBrands from "../../features/OurBrands/OurBrands";
import Collections from "../../features/OurCollections/Collections";
import OurLocation from "../../features/OurLocation/OurLocation";
import ChooseUs from "../../features/WhyChooseUs/WhyChooseUs";
import PlanTrip from "../../features/PlanYourTrip/PlanTrup";
import MapMain from "../../features/MapBox/MapMain";

const Main = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Collections />
      <OurBrands />
      <OurLocation />
      <MapMain/>
      <PlanTrip/>
      <ChooseUs/>
    </div>
  );
};

export default Main;
