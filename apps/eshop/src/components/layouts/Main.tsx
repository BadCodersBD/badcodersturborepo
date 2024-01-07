import React from "react";
import Hero from "../ui/features/Hero/Hero";
import Services from "../ui/features/OurServices/Services";
import OurBrands from "../ui/features/OurBrands/OurBrands";
import Collections from "../ui/features/OurCollections/Collections";
import OurLocation from "../ui/features/OurLocation/OurLocation";
import ChooseUs from "../ui/features/WhyChooseUs/WhyChooseUs";
import PlanTrip from "../ui/features/PlanYourTrip/PlanTrup";
import MapMain from "../ui/features/MapBox/MapMain";

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
