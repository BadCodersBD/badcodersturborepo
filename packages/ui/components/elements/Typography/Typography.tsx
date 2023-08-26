import type { ElementType, ReactNode } from "react";
import { forwardRef } from "react";

import type { WithSpacing } from "../../foundations/spacing";
import type { Theme } from "../../foundations/theming";
import type { CustomTypography } from "../../foundations/typography";
import { Styled } from "./Typography.styled";

export type TypographyProps = WithSpacing<{
  /** The semantic HTML tag to use when rendering the component. */
  tag?: ElementType;
  /** The typography variant. */
  variant?: keyof CustomTypography;
  /** The design in the theme to follow. */
  design?: keyof Pick<Theme["body"], "discount" | "error">;
  casing?: "lowercase" | "uppercase";
  display?: "block";
  tabIndex?: number;
  children: ReactNode;
  hyphens?: "auto" | "manual" | "none";
}>;

// eslint-disable-next-line react/display-name
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({
    tag = "span",
    variant = "bodyMedium",
    children,
    ...props
  }: TypographyProps) => {
    return (
      <Styled.Typography {...props} component={tag} variant={variant}>
        {children}
      </Styled.Typography>
    );
  }
);
