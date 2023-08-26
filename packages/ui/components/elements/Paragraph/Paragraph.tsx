import React from "react";

import type { WithSpacing } from "../../foundations/spacing";
import type { CustomTypography } from "../../foundations/typography";
import { Styled } from "./Paragraph.styled";

export type ParagraphProps = WithSpacing<{
  /**
   * The variant to apply to the paragraph
   */
  variant: "small" | "medium" | "large" | "cta" | "caption";
  /**
   * Children allowed are multiple elements, strings, numbers, fragments, etc.
   */
  children: React.ReactNode;
}>;

const variantMapping: Record<
  ParagraphProps["variant"],
  keyof CustomTypography
> = {
  small: "bodySmall",
  medium: "bodyMedium",
  large: "bodyLarge",
  cta: "bodyExtraSmallBoldSerif",
  caption: "bodyExtraSmall",
};

export function Paragraph({
  variant,
  children,
  spacingBottom = 1,
  ...props
}: ParagraphProps) {
  return (
    <Styled.Paragraph
      {...props}
      spacingBottom={spacingBottom}
      tag="p"
      variant={variantMapping[variant]}
    >
      {children}
    </Styled.Paragraph>
  );
}
