import { createContext, useContext, useMemo } from "react";

import type { IconName } from "../elements/Icon/Icon";

type LocaleInfo = {
  countryCode: string;
  countryName: string;
  countryIcon: Extract<IconName, `flag${string}`>;
  isUnitedStates: boolean;
  isVisualization: boolean;
  languageCode: string;
  locale: string;
};

type LocaleInfoFragment = {
  locale: string;
  languageRoot: string;
  commerceLocale: string;
  market: {
    region: string;
    currencyCode: string;
    countryCode: string;
    storeKey: string;
  };
};

export type EnhancedLocaleInfo = LocaleInfo & {
  storeKey: string;
  currencyCode: string;
  commerceLocale: string;
};

const LocaleInfoContext = createContext<EnhancedLocaleInfo | null>(null);

type LocaleInfoProviderProps = React.PropsWithChildren<{
  localeFragment?: LocaleInfoFragment;
  localeInfo: LocaleInfo;
}>;

export function LocaleInfoProvider({
  localeFragment,
  localeInfo,
  children,
}: LocaleInfoProviderProps) {
  const enhancedLocaleInfo: EnhancedLocaleInfo = useMemo(
    () =>
      localeFragment
        ? {
            ...localeInfo,
            locale: localeFragment.locale,
            languageCode: localeFragment.languageRoot,
            commerceLocale: localeFragment.commerceLocale,
            countryCode: localeFragment.market.countryCode,
            isUnitedStates: localeFragment.market.region === "us",
            currencyCode: localeFragment.market.currencyCode,
            storeKey: localeFragment.market.storeKey,
          }
        : { ...localeInfo, storeKey: "", currencyCode: "", commerceLocale: "" },
    [localeInfo, localeFragment]
  );

  return (
    <LocaleInfoContext.Provider value={enhancedLocaleInfo}>
      {children}
    </LocaleInfoContext.Provider>
  );
}

export function useLocaleInfo(): EnhancedLocaleInfo | null {
  return useContext(LocaleInfoContext);
}
