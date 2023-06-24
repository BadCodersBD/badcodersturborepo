import React from "react";
import Image from "next/image";
import { Styled } from "./Footer.styled";

const Footer = () => {

    return (
        <>
            <Styled.Footer id="footer">
                <Styled.Heading>Footer</Styled.Heading>
                <Image
                    src="/foodie.png"
                    alt="Foodies logo"
                    priority={true}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '50%', height: '50%'}}
                />
            </Styled.Footer>
        </>
    );
};

export default Footer;

//adding comment for rebuild