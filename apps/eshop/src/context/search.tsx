import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface SearchContextProps {
  searchActive: boolean;
  setSearchActive: Dispatch<SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProviderContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProviderContext");
  }
  return context;
};
