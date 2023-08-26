import type { IconButtonProps } from "../IconButton";
import IconButton from "../IconButton/IconButton";

export type CloseButtonProps = Omit<IconButtonProps, "iconName" | "title"> & {
  title: string;
};

export function CloseButton({
  title,
  iconSize = "medium",
  padding = 0.5,
  ...props
}: CloseButtonProps) {
  return (
    <IconButton
      {...props}
      iconName="close"
      iconSize={iconSize}
      padding={padding}
      title={title}
    />
  );
}
