import React from "react";
import Hero from "../../features/Hero/Hero"
import Footer from "@/components/ui/features/footer/Footer";
import Services from "../../features/OurServices/Services";
import OurBrands from "../../features/OurBrands/OurBrands";

const Main = () => {

    return (
        <div>
            <Hero/>
            <Services/>
            <OurBrands/>
            <Footer />
        </div>
    );
};

export default Main;
