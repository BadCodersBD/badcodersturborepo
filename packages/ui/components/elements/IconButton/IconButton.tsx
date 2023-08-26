import { ButtonUnstyled } from "@mui/base";

import type { SpacingFactor } from "../../foundations/spacing";
import type { IconName, IconSize } from "../Icon";
import { Icon } from "../Icon";
import { Styled } from "./IconButton.styled";

export type IconButtonProps = {
  title: string;
  iconName: IconName;
  iconSize?: IconSize;
  padding?: SpacingFactor;
  onClick: () => void;
};

export default function IconButton({
  title,
  iconName,
  iconSize = "medium",
  padding = 0.5,
  ...props
}: IconButtonProps) {
  return (
    <ButtonUnstyled
      {...props}
      aria-label={title}
      component={Styled.IconButton}
      padding={padding}
      title={title}
    >
      <Icon name={iconName} size={iconSize} />
    </ButtonUnstyled>
  );
}
