import { forwardRef } from "react";

import type { WithSpacing } from "../../foundations/spacing";
import type { CustomTypography } from "../../foundations/typography";
import { Styled } from "./Heading.styled";

export type HeadingProps = WithSpacing<{
  /**
   * The semantic HTML tag to use when rendering the component.
   */
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /**
   * The typography variant to apply to the heading
   */
  variant: Extract<keyof CustomTypography, `h${number}${string}`>;
  /**
   * If set, configures the size of any lentils used within the heading.
   */
  children: string;
  tabIndex?: number;
}>;

// eslint-disable-next-line react/display-name
export const Heading = forwardRef<HTMLElement, HeadingProps>(
  ({ tag, children, ...props }, ref) => (
    <Styled.Heading {...props} ref={ref} tag={tag}>
      {children}
    </Styled.Heading>
  )
);
