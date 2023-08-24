import React from "react";
import Hero from "../../features/Hero/Hero"
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
        </div>
    );
};

export default Main;
