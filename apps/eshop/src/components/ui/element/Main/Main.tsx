import React from "react";
import Hero from "../../features/Hero/Hero"
import Experience from "../../features/Experience/Experience"
import Contact from "../../features/Contact/Contact"
import Project from "../../features/Project/Projects"
import Footer from "@/components/ui/features/footer/Footer";

const Main = () => {

    return (
        <div>
            <Hero/>
            <Experience/>
            <Project/>
            <Footer />
            {/* <Contact/> */}
        </div>
    );
};

export default Main;
