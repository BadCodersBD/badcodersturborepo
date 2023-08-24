import React, { useState } from "react";
import { Styled } from "./Newsletter.styled";

const Newsletter = () => {
  const [showCongrats, setShowCongrats] = useState(true);

  return (
    <>
      <Styled.Newsletter>
        <Styled.Title>Subscribe Now</Styled.Title>
        <Styled.Content>
          Get the latest news and exclusive content by joining our newsletter
          today.
        </Styled.Content>
        <Styled.InputMain>
          <div className="mt-[10rem]">
            <h5 className="text-xl font-bold text-green-700"></h5>
          </div>
          <Styled.Input
            id="email"
            type="email"
            placeholder={"Enter your Email"}
          />
          <Styled.Button>{"Subscribe"}</Styled.Button>
        </Styled.InputMain>
      </Styled.Newsletter>
    </>
  );
};

export default Newsletter;
