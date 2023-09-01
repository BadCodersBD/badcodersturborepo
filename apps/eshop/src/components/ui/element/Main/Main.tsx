import React from "react";
import Hero from "../../features/Hero/Hero";
import Services from "../../features/OurServices/Services";
import OurBrands from "../../features/OurBrands/OurBrands";
import Collections from "../../features/OurCollections/Collections";
import OurLocation from "../../features/OurLocation/OurLocation";

const Main = () => {
  
  return (
    <div>
      <Hero />
      <Services />
      <Collections />
      <OurBrands />
      <OurLocation />
    </div>
  );
};

export default Main;
