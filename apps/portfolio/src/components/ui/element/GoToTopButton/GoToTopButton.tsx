import { useState, useEffect } from "react";
import { Styled } from "./GoToTop.styled";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <Styled.Button
          onClick={handleClick}
        >
          <ArrowCircleUpIcon fontSize="large" />
        </Styled.Button>
      )}
    </>
  );
};

export default GoToTopButton;
