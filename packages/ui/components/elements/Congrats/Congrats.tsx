import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import CongratsData from "./congrats.json";

type Props = {
  width: number;
  height: number;
};

export const Congrats = ({ width = 100, height = 100 }: Props) => {
  const congratsContainer = useRef<HTMLDivElement>( null );
  
  useEffect(() => {
    if (congratsContainer.current) {
      lottie.loadAnimation({
        container: congratsContainer.current,
        renderer: "html",
        loop: true,
        autoplay: true,
        animationData: CongratsData,
      });
    }
  }, [] );
  
  return (
    <div
      ref={congratsContainer}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        position: "relative",
      }}
    />
  );
};
