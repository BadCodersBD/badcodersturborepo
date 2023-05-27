import React from "react";
import Image from "next/image";
import { Styled } from "./Footer.styled";

const Footer = () => {

    return (
        <>
            <Styled.Footer>
                <Styled.Heading>Footer</Styled.Heading>
                <Image
                    src="/foodie.png"
                    width={170}
                    height={10}
                    alt="Foodies logo"
                />
            </Styled.Footer>
        </>
    );
};

export default Footer;
