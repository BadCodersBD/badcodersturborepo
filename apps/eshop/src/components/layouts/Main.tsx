import React from "react";
// import Hero from "../ui/features/Hero/Hero";
import Services from "../ui/features/OurServices/Services";
import OurBrands from "../ui/features/OurBrands/OurBrands";
import Collections from "../ui/features/OurCollections/Collections";
import OurLocation from "../ui/features/OurLocation/OurLocation";
import ChooseUs from "../ui/features/WhyChooseUs/WhyChooseUs";
import PlanTrip from "../ui/features/PlanYourTrip/PlanTrup";
import MapMain from "../ui/features/MapBox/MapMain";
import HeroSection from "../ui/features/HeroSection";
import AboutSection from "../ui/features/AboutCompany";
import Whychoose from "../ui/features/whychoose";
import DownloadApp from "../ui/features/DownloadApp";
import Testimonial from "../ui/features/Testimonial";
import BrandsSection from "../ui/features/brands";
import CarSlider from "../ui/features/carSlider";

const Main = () => {
  return (
    <div className=" w-full bg-white text-black ">
      <HeroSection/>
      <Collections />
      <OurBrands/>
      <AboutSection/>
      <Whychoose/>
      <Testimonial/>
      <DownloadApp/>
      <BrandsSection/>
    </div>
  );
};

export default Main;
