import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {

    return (
        <div id="contact" style={{ backgroundColor: "white", padding: '2rem' }}>
            <h1 className="text-black text-4xl font-semibold text-center">Contact with me</h1>
            <ContactForm/>
        </div>
    );
};

export default Contact;