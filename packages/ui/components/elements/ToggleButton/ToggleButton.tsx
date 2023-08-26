import { useState } from "react";
import { Styled } from "./ToggleButton.styled";
import { btnSizes } from "./ToggleButton.styled";
import { useCmsContext } from "../../contexts/CmsContext";
export interface ToggleButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  lineStroke?: string;
  variant: keyof typeof btnSizes;
  toggleHover?: boolean;
  isDark?: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  variant,
  lineStroke,
  toggleHover,
  isDark,
}) => {
  
  const { setSidebarToggle, sidebarToggle } = useCmsContext();

  const handleActive = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <Styled.ToggleButton
      variant={variant}
      lineStroke={lineStroke}
      className={`toggle`}
      toggleHover={toggleHover ? "true" : "false"}
      isDark={isDark ? "true" : "false"}
      onClick={handleActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </Styled.ToggleButton>
  );
};
