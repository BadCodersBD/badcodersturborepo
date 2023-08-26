import { useState, useEffect } from "react";
import { Styled } from "./GoToTop.styled";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { useThemeContext } from "ui/components/contexts/ThemeContext";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const { isDarkMode } = useThemeContext();

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
          isDarkMode={isDarkMode ? "true" : "false"}
          onClick={handleClick}
        >
          <SystemUpdateAltIcon className="rotate-180 text-[1.75rem]" />
        </Styled.Button>
      )}
    </>
  );
};

export default GoToTopButton;
