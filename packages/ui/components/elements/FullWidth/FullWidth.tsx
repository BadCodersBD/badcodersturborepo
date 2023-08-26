import type { ReactNode } from "react";

import type {
  Breakpoint,
  smallestBreakpoint,
} from "../../foundations/breakpoints";
import { Styled } from "./FullWidth.styled";

export type FullWidthProps = {
  /**
   * The breakpoint at which this container stops being full width.
   */
  until: Exclude<Breakpoint, typeof smallestBreakpoint>;
  children: ReactNode;
};

/**
 * You will not need to use this element 99% of the time.
 * It's preferred to not use the content container over using this element.
 */
export function FullWidth({ until, children }: FullWidthProps) {
  return <Styled.FullWidth until={until}>{children}</Styled.FullWidth>;
}
