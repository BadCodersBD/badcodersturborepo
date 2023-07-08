import React from "react";
import Hero from "../../features/Hero/Hero"
import Experience from "../../features/Experience/Experience"
import Contact from "../../features/Contact/Contact"
import Project from "../../features/Project/Projects"

const Main = () => {

    return (
        <div>
            <Hero/>
            <Experience/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default Main;
