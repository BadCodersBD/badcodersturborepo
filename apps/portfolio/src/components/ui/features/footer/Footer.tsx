import React from "react";
import Image from "next/image";
import { Styled } from "./Footer.styled";

const Footer = () => {

    return (
        <div>
            <Styled.Footer>
                <Styled.Heading>Footer</Styled.Heading>
                {/* <Image
                    src="/foodie.png"
                    alt="Foodies logo"
                    priority={true}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '50%', height: '50%'}}
                /> */}
            </Styled.Footer>
            <div className="w-full h-20 bg-gray-800">
                down footer
            </div>
        </div>
    );
};

export default Footer;

//adding comment for rebuild