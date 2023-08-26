import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import ConstructData from "./UnderConstructionGif.json";

type Props = {
  width: number;
  height: number;
};

export const UnderConstruct = ({ width = 100, height = 100 }: Props) => {
  const constructContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (constructContainer.current) {
      lottie.loadAnimation({
        container: constructContainer.current,
        renderer: "html",
        loop: true,
        autoplay: true,
        animationData: ConstructData,
      });
    }
  }, []);

  return (
    <div
      ref={constructContainer}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        position: "relative",
      }}
    />
  );
};
