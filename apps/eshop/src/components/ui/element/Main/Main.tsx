import React from "react";
import Hero from "../../features/Hero/Hero";
import Services from "../../features/OurServices/Services";
import OurBrands from "../../features/OurBrands/OurBrands";
import Newsletter from "../../features/JoinNewsLetter/NewsLetter";
import Collections from "../../features/OurCollections/Collections";
import OurLocation from "../../features/OurLocation/OurLocation";
import Contact from "../../features/Contact/Contact";

const Main = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Collections />
      <OurBrands />
      <OurLocation />
      <Contact/>
      <Newsletter />
    </div>
  );
};

export default Main;
