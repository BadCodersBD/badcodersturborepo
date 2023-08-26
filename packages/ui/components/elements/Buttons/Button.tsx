import { Styled } from "./Button.styled";
import { ButtonPropsType } from "../../../types/types";

export const GenericButton = ({
  isDisabled = false,
  variant = "filled",
  size = "large",
  backgroundColor,
  textColor,
  shape,
  children
}: ButtonPropsType) => {
  return (
    <Styled.Button
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
      isDisabled={isDisabled}
      shape={shape}
    >
      {children}
    </Styled.Button>
  );
};
