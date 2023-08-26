import type { ElementType, ReactNode } from "react";

import { Styled } from "./VisuallyHidden.styled";

export type VisuallyHiddenProps = {
  tag?: ElementType;
  children: ReactNode;
};

export function VisuallyHidden({
  tag = "span",
  children,
  ...props
}: VisuallyHiddenProps) {
  return (
    <Styled.Span {...props} as={tag}>
      {children}
    </Styled.Span>
  );
}
