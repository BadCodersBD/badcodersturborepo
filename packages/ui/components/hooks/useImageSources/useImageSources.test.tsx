import type { FormatImageUrl } from "../../contexts/FormatImageUrlContext";
import type { BreakpointSpecific } from "../../foundations/breakpoints";
import { expect } from "@jest/globals";

jest.mock("./calculateImageWidths", () => {
  return {
    calculateImageWidths: jest.fn((_, breakpoint: keyof BreakpointSpecific) => {
      const testWidths: Required<BreakpointSpecific<Array<number>>> = {
        xs: [100, 300],
        sm: [101, 303],
        md: [110, 330],
        lg: [200, 450],
        xl: [220, 455],
      };
      return testWidths[breakpoint];
    }),
  };
});

jest.mock("../../contexts", () => ({
  useFormatImageUrl: jest.fn(
    (): FormatImageUrl =>
      (imageUrl, { width, format }) => {
        const formatString = format ? `_${format}` : "";
        return `FORMATTED_${imageUrl}_${width}${formatString}`;
      }
  ),
}));

describe("Hero test", () => {
  test.only("my only true test", () => {
    expect(1 + 1).toEqual(2);
  });
});
