import React from "react";
import Hero from "../../features/Hero/Hero"
import Footer from "@/components/ui/features/footer/Footer";
 import Services from "../../features/OurServices/Services";
import OurBrands from "../../features/OurBrands/OurBrands";
import Newsletter from "../../features/JoinNewsLetter/NewsLetter";
import Collections from "../../features/OurCollections/Collections";

const Main = () => {

    return (
        <div>
            <Hero/>
            <Services/>
            <Collections/>
            <OurBrands/>
            <Newsletter/>
            <Footer />
        </div>
    );
};

export default Main;
