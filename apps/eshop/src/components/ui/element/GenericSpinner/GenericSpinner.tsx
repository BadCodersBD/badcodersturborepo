import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import GenericSpinnerData from "./GenericSpinnerData.json";

type Props = {
  diameter: number;
};

export const GenericSpinner = ({ diameter = 100 }: Props) => {
  const spinnerContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (spinnerContainer.current) {
      lottie.loadAnimation({
        container: spinnerContainer.current,
        renderer: "html",
        loop: true,
        autoplay: true,
        animationData: GenericSpinnerData,
      });
    }
  }, []);
  return (
    <div
      ref={spinnerContainer}
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        position: "relative",
      }}
    />
  );
};
