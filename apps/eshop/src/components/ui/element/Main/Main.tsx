import React from "react";
import Hero from "../../features/Hero/Hero"
import Project from "../../features/Project/Projects"
import Footer from "@/components/ui/features/footer/Footer";
import Services from "../../features/OurServices/Services";

const Main = () => {

    return (
        <div>
            <Hero/>
            <Services/>
            <Project/>
            <Footer />
        </div>
    );
};

export default Main;
