import type { ReactNode } from "react";

import type {
  Breakpoint,
  smallestBreakpoint,
} from "../../foundations/breakpoints";
import { Styled } from "./ContentContainer.styled";

export type ContentContainerProps = {
  /** The semantic HTML tag to use when rendering the component. */
  tag?: "div" | "section" | "span";
  /** If true, will bound the content's max width. */
  withMaxWidth?: boolean;
  /** If set, will allow outer padding on nested content containers. */
  withNestedPadding?:
    | boolean
    | { until: Exclude<Breakpoint, typeof smallestBreakpoint> };
  children: ReactNode;
};

export function ContentContainer({
  tag = "div",
  withMaxWidth = true,
  withNestedPadding = false,
  children,
  ...props
}: ContentContainerProps) {
  return (
    <Styled.Container
      as={tag}
      // eslint-disable-next-line react/forbid-component-props
      className="content-container"
      withMaxWidth={withMaxWidth}
      withNestedPadding={withNestedPadding}
      {...props}
    >
      {children}
    </Styled.Container>
  );
}
