import { createContext, useContext } from "react";

export type ValidationEntry = {
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  customValidate?: (value: string) => boolean;
};

export type ValidationKey = keyof Omit<
  Validation,
  "getValidationEntryByCountry"
>;

export type Validation = {
  emailValidation: ValidationEntry;
  passwordValidation: ValidationEntry;
  phoneValidation: ValidationEntry;
  zipCodeValidation: ValidationEntry;

  getValidationEntryByCountry: (
    countryCode: string,
    key: ValidationKey
  ) => ValidationEntry;
};

const ValidationContext = createContext<Validation | undefined>(undefined);

export const ValidationProvider = ValidationContext.Provider;

export function useValidation(): Validation {
  const validation = useContext(ValidationContext);

  if (validation) return validation;

  throw new Error("The validation is missing; please check the locale.");
}
