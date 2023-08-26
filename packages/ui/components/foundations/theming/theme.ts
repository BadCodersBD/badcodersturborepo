import { baseTheme } from ".";
import { useCmsContext } from "../../contexts/CmsContext";

export const LightTheme = () => {
  const { carouselBgColor } = useCmsContext();
  const lightTheme = {
    colors: {
      background: `${carouselBgColor}10`,
      text: baseTheme.colors.neutrals.full_black,
    },
  };
  return lightTheme;
};

export const DarkTheme = () => {
  const darkTheme = {
    colors: {
      background: baseTheme.colors.neutrals.full_black,
      text: baseTheme.colors.neutrals.full_white,
    },
  };
  return darkTheme;
};
