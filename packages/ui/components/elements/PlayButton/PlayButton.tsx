import type { ButtonUnstyledProps } from "@mui/base";
import { ButtonUnstyled } from "@mui/base";

import { Icon } from "../Icon";
import { VisuallyHidden } from "../VisuallyHidden";
import { Styled } from "./PlayButton.styled";

export type PlayButtonProps = Pick<
  ButtonUnstyledProps,
  "children" | "onClick"
> & {
  tag?: "button" | "div";
  ariaLabel?: string;
  title?: string;
  hiddenLabel?: string;
};

export function PlayButton({
  tag = "button",
  onClick,
  ariaLabel,
  hiddenLabel,
  title,
}: PlayButtonProps) {
  return (
    <ButtonUnstyled
      arial-label={ariaLabel}
      as={tag}
      component={Styled.Button}
      onClick={onClick}
      role={undefined}
      tabIndex={undefined}
      tag={tag}
      title={title}
    >
      {hiddenLabel && <VisuallyHidden>{hiddenLabel}</VisuallyHidden>}
      <Icon hidden={true} name="play" />
    </ButtonUnstyled>
  );
}
