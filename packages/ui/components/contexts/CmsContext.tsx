import React, { createContext, useState, useContext } from "react";

export const CmsContext = createContext<CmsContextType | object>({});

type Props = {
  children?: React.ReactChild;
};

export type CmsContextType = {
  carouselsContext?: object;
  setCarouselsContext: React.Dispatch<React.SetStateAction<object | null>>;
  addToCartContext: string[];
  setAddToCartContext: React.Dispatch<React.SetStateAction<string[] | null>>;
  selectedCarousel: object;
  setSelectedCarousel: React.Dispatch<React.SetStateAction<object | null>>;
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  carouselBgColor: string;
  setCarouselBgColor: React.Dispatch<React.SetStateAction<string | null>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string | null>>;
};

export const useCmsContext = () => {
  return useContext(CmsContext) as CmsContextType;
};

const CmsContextProvider = ({ children }: Props) => {
  const [carouselsContext, setCarouselsContext] = useState([]);
  const [addToCartContext, setAddToCartContext] = useState<string[]>([]);
  const [selectedCarousel, setSelectedCarousel] = useState<object>({});
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const [carouselBgColor, setCarouselBgColor] = useState<string>("#ffffff");
  const [userEmail, setUserEmail] = useState<string>("");

  const value = {
    carouselsContext,
    setCarouselsContext,
    addToCartContext,
    setAddToCartContext,
    selectedCarousel,
    setSelectedCarousel,
    sidebarToggle,
    setSidebarToggle,
    carouselBgColor,
    setCarouselBgColor,
    userEmail,
    setUserEmail,
  };

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
};

export default CmsContextProvider;
