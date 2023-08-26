import { jest } from "@jest/globals";
import type { PropsWithChildren } from "react";

import type { Validation } from "./ValidationContext";
import { ValidationProvider } from "./ValidationContext";

export const mockValidation: Validation = {
  emailValidation: {
    pattern: /[a-z]+@[a-z]+\.[a-z]+/i,
  },
  passwordValidation: {
    minLength: 8,
  },
  phoneValidation: {
    pattern: /[0-9]+/i,
  },
  zipCodeValidation: {
    minLength: 5,
    maxLength: 7,
  },
  getValidationEntryByCountry: jest.fn(() => mockValidation.zipCodeValidation),
};

export function MockValidationProvider({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <ValidationProvider value={mockValidation}>{children}</ValidationProvider>
  );
}
